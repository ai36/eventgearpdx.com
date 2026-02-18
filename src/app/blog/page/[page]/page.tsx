import type { Metadata } from "next";
import Pagination from "@/components/Pagination";
import BlogPostsList from "@/components/BlogPostsList";
import { getAllPostsMeta } from "../../blog";
import { notFound } from "next/navigation";
import { BLOG_POSTS_PER_PAGE } from "@/constants";
import type { BlogPost } from "@/types";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const allPosts = (await getAllPostsMeta()) as BlogPost[];
  const totalPages = Math.ceil(allPosts.length / BLOG_POSTS_PER_PAGE);

  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber < 2) notFound();

  const allPosts = (await getAllPostsMeta()) as BlogPost[];
  const totalPages = Math.ceil(allPosts.length / BLOG_POSTS_PER_PAGE);
  if (pageNumber > totalPages) notFound();

  const url = `/blog/${pageNumber}`;

  return {
    title: `All posts — Page ${pageNumber}`,
    description: `Blog posts — page ${pageNumber}.`,
    alternates: { canonical: url },
    openGraph: { url },
    robots: { index: true, follow: true },
  };
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber < 2) notFound();

  const allPosts = (await getAllPostsMeta()) as BlogPost[];
  const totalPages = Math.ceil(allPosts.length / BLOG_POSTS_PER_PAGE);

  if (pageNumber > totalPages) notFound();

  const posts = allPosts.slice(
    (pageNumber - 1) * BLOG_POSTS_PER_PAGE,
    pageNumber * BLOG_POSTS_PER_PAGE,
  );

  return (
    <main className="flex-1 mt-16 py-24 max-w-xl mx-auto">
      <div className="container px-0">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
          Blog • All posts
        </p>

        <h1 className="sr-only font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Blog - Page {pageNumber}
        </h1>

        <BlogPostsList posts={posts} />
        <Pagination currentPage={pageNumber} totalPages={totalPages} />
      </div>
    </main>
  );
}
