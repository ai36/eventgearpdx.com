import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, PostImage } from "@/types";

const POSTS_DIR = path.join(process.cwd(), "public", "blog");
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export async function getAllSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = await fs.readFile(fullPath, "utf8");

  const { data, content } = matter(raw);

  return {
    slug,
    date: (data.date as string) ?? null,
    author: (data.author as string) ?? null,
    author_avatar: (data.author_avatar as string) ?? null,
    categories: (data.categories as string[]) ?? [],
    images: {
      cover: data.images?.cover
        ? { src: data.images.cover.src, alt: data.images.cover.alt ?? null }
        : null,
      gallery: Array.isArray(data.images?.gallery)
        ? data.images.gallery.map((img: PostImage) => ({
            src: img.src,
            alt: img.alt ?? null,
          }))
        : [],
    },
    ogImage: (data.ogImage as string) ?? null,
    canonical: `${BASE_URL}/${data.canonical ?? ""}`,
    draft: Boolean(data.draft ?? false),
    content,
  } as BlogPost;
}

export async function getAllPostsMeta() {
  const slugs = await getAllSlugs();
  const posts = await Promise.all(slugs.map(getPostBySlug));

  // сортировка, например по date или по имени файла
  return posts
    .map((p: BlogPost) => ({
      ...p,
      slug: p.slug,
      content: p.content,
    }))
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}
