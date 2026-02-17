import { cn } from "@/lib";
import { notFound } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages < currentPage) notFound();

  if (totalPages <= 1) return null;

  let buttons: (number | string)[] = [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];

  switch (currentPage) {
    case 1:
      buttons = [1, 2, 3, "...", totalPages];
      break;
    case 2:
      buttons = [1, 2, 3, "...", totalPages];
      break;
    case totalPages:
      buttons = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      break;
    case totalPages - 1:
      buttons = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      break;
  }

  if (totalPages <= 7) {
    buttons = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  return (
    <div className="flex justify-center mt-8 gap-2">
      {buttons?.map((button, index) => (
        <a
          key={index}
          href={
            button === 1
              ? `/blog`
              : `/blog/page/${button === "..." ? currentPage : button}`
          }
          className={cn(
            "flex-1 max-w-12 flex items-center justify-center bg-accent/15 text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent transition-colors",
            button === currentPage && "pointer-events-none bg-accent-gradient",
            button === "..." && "pointer-events-none bg-transparent",
          )}
        >
          {button}
        </a>
      ))}
    </div>
  );
}
