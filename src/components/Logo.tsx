import { cn } from "@/lib/utils";
import Link from "next/link";

// The mark itself lives in public/logo.svg rather than inline: it is a traced
// 320x320 artwork (~160KB of path data) displayed at 40px, and inlining it put
// that payload into every prerendered page three times — once per <Logo /> in
// the header and footer, plus again in the RSC payload. As a static file the
// browser fetches and caches it once.
const Logo = ({ className }: React.HTMLAttributes<HTMLLinkElement>) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-2 font-heading text-xl font-bold text-background dark:text-foreground/70 tracking-tight",
        className,
      )}
      href="/"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimization needed */}
      <img
        src="/logo.svg"
        alt=""
        width={320}
        height={320}
        className="max-w-10 h-auto"
        loading="eager"
        decoding="async"
      />
      <span className="md:hidden lg:block">
        Event<span className="text-accent">Gear</span>
      </span>
    </Link>
  );
};

export default Logo;
