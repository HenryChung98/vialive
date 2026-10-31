import { getCollection } from "astro:content"
import { locales, ui, type Locale } from "@/i18n/ui"

// Doc ids mirror the URL: "currency-converter/policy" (English) or "ko/currency-converter/policy".
export function parseDocId(id: string) {
  const [first, ...rest] = id.split("/")
  const locale = locales.find((l) => l !== "en" && l === first)
  return { locale: locale ?? "en", app: locale ? rest[0] : first }
}

// Splits a support page's rendered md into the part before the first "### question" and one item per question.
// ponytail: assumes the FAQ is the page's last section; anything after it would end up in the last answer.
export function splitFaq(html: string) {
  const [intro, ...sections] = html.split(/(?=<h3[\s>])/)
  const items = sections.map((s) => {
    const [, id, question, answer] = s.match(/^<h3 id="([^"]*)">(.*?)<\/h3>(.*)$/s)!
    return { id, question, html: answer }
  })
  return { intro, items }
}

// One sidebar group per app, in ui.ts order, with its docs sorted by `order`.
export async function getSidebar(locale: Locale) {
  const docs = await getCollection("docs", (d) => parseDocId(d.id).locale === locale)
  docs.sort((a, b) => a.data.order - b.data.order)
  return ui[locale].apps.map((app) => ({
    app,
    docs: docs.filter((d) => parseDocId(d.id).app === app.slug),
  }))
}
