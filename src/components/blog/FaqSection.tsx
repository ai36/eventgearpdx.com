"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/parseFaq";

interface FaqSectionProps {
  items: FaqItem[];
}

export default function FaqSection({ items }: FaqSectionProps) {
  if (!items.length) return null;

  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>
      <div className="not-prose">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-accent">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
