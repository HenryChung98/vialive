import { useEffect, useState } from "react"
import { Search as SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandDialog, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"

type Result = { url: string; meta: { title: string }; excerpt: string }
type Pagefind = {
  debouncedSearch: (query: string) => Promise<{ results: { data: () => Promise<Result> }[] } | null>
}

// Written by `pagefind --site dist` after `astro build`, so search works in build/preview but not `astro dev`.
// Pagefind picks the index matching <html lang>, so each locale only searches its own pages.
const pagefindUrl = "/pagefind/pagefind.js"
let pagefind: Promise<Pagefind> | undefined

export function Search({ label, empty }: { label: string; empty: string }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Result[]>([])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    addEventListener("keydown", onKeyDown)
    return () => removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    if (!query) return
    let stale = false
    pagefind ??= import(/* @vite-ignore */ pagefindUrl)
    pagefind
      .then((pf) => pf.debouncedSearch(query))
      // null means a newer query superseded this one.
      .then((search) => search && Promise.all(search.results.slice(0, 8).map((r) => r.data())))
      .then((data) => data && !stale && setResults(data))
      .catch(() => setResults([]))
    return () => {
      stale = true
    }
  }, [query])

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        aria-label={label}
        onClick={() => setOpen(true)}
        className="text-muted-foreground sm:w-48 sm:justify-between"
      >
        <span className="flex items-center gap-1.5">
          <SearchIcon />
          <span className="hidden sm:inline">{label}</span>
        </span>
        <Kbd className="hidden sm:inline-flex">⌘K</Kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title={label} description={label}>
        <Command shouldFilter={false}>
          <CommandInput placeholder={label} value={query} onValueChange={setQuery} />
          <CommandList>
            {query && <CommandEmpty>{empty}</CommandEmpty>}
            {(query ? results : []).map((r) => (
              <CommandItem key={r.url} value={r.url} onSelect={() => location.assign(r.url)}>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="font-medium">{r.meta.title}</span>
                  <span
                    className="line-clamp-2 text-xs text-muted-foreground [&_mark]:bg-transparent [&_mark]:font-medium [&_mark]:text-primary"
                    // Pagefind escapes page text and only adds <mark> around matches.
                    dangerouslySetInnerHTML={{ __html: r.excerpt }}
                  />
                </div>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
