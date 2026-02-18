import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s — Blog — EventGear PDX",
  },
  description: "Articles and guides about presentation gear and event AV — EventGear PDX",
  openGraph: {
    title: "Blog — Event Gear PDX",
    description: "Articles and guides about presentation gear and event AV — EventGear PDX",
    type: "website",
    url: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
