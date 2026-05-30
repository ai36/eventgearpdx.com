import type { Metadata } from "next";
import Pagination from "@/components/Pagination";
import BlogPostsList from "@/components/BlogPostsList";
import { getAllPostsMeta, getPaginatedPosts } from "./blog";
import type { BlogPost } from "@/types";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "All posts",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default async function BlogPage() {
  const allPosts = (await getAllPostsMeta()) as BlogPost[];
  const { posts, totalPages } = getPaginatedPosts(allPosts, 1);

  return (
    <main className="flex-1 mt-16 py-24 max-w-xl mx-auto">
      <div className="container px-0">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
          Blog • All posts
        </p>

        <h1 className="sr-only font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Blog - Page 1
        </h1>

        <BlogPostsList posts={posts} />
        <Pagination currentPage={1} totalPages={totalPages} />
      </div>
    </main>
  );
}
