export type PostImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type BlogPost = {
  slug: string;
  date: string | null;

  author?: string;
  author_avatar?: string;

  categories: string[];

  images?: {
    cover?: PostImage;
    gallery?: PostImage[];
  };

  ogImage?: string;
  canonical?: string;

  draft: boolean;

  content: string;
};
