import type { Metadata } from "next";
import Pagination from "@/components/Pagination";
import BlogPostsList from "@/components/BlogPostsList";
import { getAllPostsMeta } from "./blog";
import { BLOG_POSTS_PER_PAGE } from "@/constants";
import type { BlogPost } from "@/types";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "All posts",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default async function BlogPage() {
  const pageNumber = 1;

  const allPosts = (await getAllPostsMeta()) as BlogPost[];
  const totalPages = Math.ceil(allPosts.length / BLOG_POSTS_PER_PAGE);

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
