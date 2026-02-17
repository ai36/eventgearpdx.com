import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "./blog/blog";
import type { BlogPost } from "@/types";
import { BLOG_POSTS_PER_PAGE, SITEMAP_CHANGE_FREQ } from "@/constants";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://eventgearpdx.vercel.app";

  const lastModified = new Date();

  const allPosts = (await getAllPostsMeta()) as BlogPost[];
  const totalPages = Math.ceil(allPosts.length / BLOG_POSTS_PER_PAGE);

  const pagesLevelOne = ["/", "/blog"];
  const staticEntriesLevelOne: MetadataRoute.Sitemap = pagesLevelOne.map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: SITEMAP_CHANGE_FREQ satisfies ChangeFreq,
      priority: path === "/" ? 1.0 : 0.8,
    }),
  );

  const pagesLevelTwo = Array.from(
    { length: totalPages - 1 },
    (_, i) => `/blog/page/${i + 2}`,
  );
  const staticEntriesLevelTwo: MetadataRoute.Sitemap = pagesLevelTwo.map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: SITEMAP_CHANGE_FREQ satisfies ChangeFreq,
      priority: 0.64,
    }),
  );

  const postSlugs = allPosts.map((post) => post.slug);
  const postEntries: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.64,
  }));

  return [...staticEntriesLevelOne, ...staticEntriesLevelTwo, ...postEntries];
}
