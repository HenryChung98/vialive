import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export type FaqItem = { id: string; question: string; html: string }

// Questions and answers are md rendered at build time. hiddenUntilFound keeps closed answers in the
// page HTML, so search engines, Pagefind and the browser's find-in-page still see them.
export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<string[]>([])

  // Open the item a #question link points to, on load and on later hash changes.
  useEffect(() => {
    const openFromHash = () => {
      const id = decodeURIComponent(location.hash.slice(1))
      if (items.some((i) => i.id === id)) setOpen((o) => (o.includes(id) ? o : [...o, id]))
    }
    openFromHash()
    addEventListener("hashchange", openFromHash)
    return () => removeEventListener("hashchange", openFromHash)
  }, [items])

  return (
    // Not `not-prose`: that would also strip prose from the answers. Instead, undo prose's h3 styles on the trigger headers.
    <Accordion
      multiple
      hiddenUntilFound
      value={open}
      onValueChange={setOpen}
      className="[&_h3]:m-0 [&_h3]:text-base [&_h3]:font-medium"
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger id={item.id} className="scroll-mt-20 py-4 text-base">
            <span dangerouslySetInnerHTML={{ __html: item.question }} />
          </AccordionTrigger>
          <AccordionContent className="text-base">
            <div className="pb-2 [&>:first-child]:mt-0" dangerouslySetInnerHTML={{ __html: item.html }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
