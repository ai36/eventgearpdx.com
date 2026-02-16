import Link from "next/link";
import Image from "next/image";
import {
  getAuthorAvatarByName,
  formatDate,
  getContentFromMarkdown,
} from "@/lib";
import { BlogPost } from "@/types";

export default async function BlogPostsList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug} className="mb-16">
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

          <Link href={`/blog/${post.slug}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {getContentFromMarkdown(post.content)?.title}
            </h2>

            <p
              className="text-muted-foreground mb-4"
              dangerouslySetInnerHTML={{
                __html: getContentFromMarkdown(post.content)?.quote ?? "",
              }}
            />
            {post.images?.cover?.src && (
              <Image
                className="rounded-xl"
                src={post.images.cover.src}
                alt={post.images.cover.alt ?? ""}
                width={post.images.cover.width ?? 1600}
                height={post.images.cover.height ?? 900}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
