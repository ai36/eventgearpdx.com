# Event Gear PDX

## Event Gear PDX - rental equipment for events - [https://eventgearpdx.vercel.app](https://eventgearpdx.vercel.app/?utm_source=github&utm_medium=readme)

### Installation & control

```sh
npm i
```

### Dev-mode

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tech Stack

- React 19
- Next.js 16 (App router) + SSR
  - next-themes
- Tailwind CSS
- Radix-UI
- Lucide (Icons for React)


## Blog control

### Post template

```md
---
<!-- Meta section -->

<!-- slug (post's id, ex. post's file - public/blog/<slug>.md, post's cover - public/blog/images/cover.jpg) -->
slug: "december-onsite-support-highlights"

<!-- html canonical metatag (only path, base url will be taking from .env - NEXT_PUBLIC_BASE_URL) -->
canonical: "blog/december-onsite-support-highlights"

<!-- There is data and time when post was created (ISO format) -->
date: "2025-12-16T08:00:00Z"

<!-- Post's author -->
author: "Field Support Team"

<!-- Author avatar, if possible -->
author_avatar: ""

<!-- Post's tags in Array -->
categories: ["news", "services"]

images:
<!-- Post's cover image -->
  cover:
    src: "/blog/images/december-onsite-support-highlights/cover.jpg"
    alt: "Onsite support"
    width: 1600
    height: 900
  gallery:
    - src: "/blog/images/december-onsite-support-highlights/event-control.jpg"
      alt: "Event control position"
      width: 1600
      height: 900
    - src: "/blog/images/december-onsite-support-highlights/presenter-support.jpg"
      alt: "Presenter assistance"
      width: 1600
      height: 900

<!-- openGraph image for forward to social network -->
ogImage: "/blog/images/december-onsite-support-highlights/cover.jpg"

<!-- Is it a draft? (Not use now) -->
draft: false
---

<!-- Content section -->

<!-- Post's title -->
# title

<!-- Post's cover, alt and link, is just duplication -->
![cover image's alt](/cover-images-link)

<!-- Post's spoiler, It's using to show short text in post's list  -->
> <Spoiler>

<!-- Post's text -->
<Content>

```