import type { Metadata } from "next";
import { getAllSlugs, getPostBySlug } from "../blog";
import { markdownToHtml } from "../markdownToHtml";
import Image from "next/image";
import { getAuthorAvatarByName, formatDate, getContentFromMarkdown } from "@/lib";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventgearpdx.com";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${slug}`;

  const meta = getContentFromMarkdown(post.content);

  const title = meta?.title ?? "Blog post";
  const description =
    `${meta?.quote ?? "Read the full article"} — EventGear PDX`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: meta?.cover || `${BASE_URL}/blog/default.jpg`,
    },
    twitter: {
      card: "summary_large_image",
      images: meta?.cover || `${BASE_URL}/blog/default.jpg`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main className="flex-1 mt-16 py-24 mx-auto">
      <div className="container mx-auto px-6">
        <article className="max-w-xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
            Blog
          </p>

          <div className="grid grid-cols-[48px_auto_1fr] grid-rows-[1fr_1fr] gap-x-4 items-center mb-4">
            <div className="w-12 h-12 row-span-2 bg-accent rounded-full flex items-center justify-center text-xl text-white font-bold">
              {post.author_avatar ? (
                <Image
                  src={post.author_avatar}
                  alt={`${post.author ? post.author : ""}`}
                />
              ) : (
                getAuthorAvatarByName(post.author)
              )}
            </div>
            <span className="text-sm text-foreground/70 self-end">
              {post.author}
            </span>
            {Array.isArray(post.categories) && (
              <ul className="flex flex-wrap gap-2 justify-end row-span-2">
                {post.categories.map((category) => (
                  <li
                    key={category}
                    className="bg-accent/15 text-secondary-foreground px-3 py-1 rounded-lg text-xs"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
            <span className="text-xs text-foreground/50 self-start">
              {formatDate(post.date)}
            </span>
          </div>

          <div
            className="max-w-xl mx-auto prose prose-md dark:prose-invert text-sm text-muted-foreground prose-ul:leading-none prose-img:rounded-xl
                   prose-blockquote:text-2xl prose-blockquote:font-thin prose-blockquote:px-6 prose-blockquote:border-x-0 prose-blockquote:border-y prose-blockquote:border-accent prose-blockquote:text-foreground/70"
            dangerouslySetInnerHTML={{
              __html: await markdownToHtml(post.content),
            }}
          />
        </article>
      </div>
    </main>
  );
}
