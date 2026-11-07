import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoEbd from "@/assets/logo ebd.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { eventInfo, navLinks } from "@/components/features/home/data/event";
import { cn } from "@/utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 shadow-soft backdrop-blur-md"
          : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4 sm:h-18">
        <a
          href="#inicio"
          className="flex items-center rounded-lg py-1 text-left"
          aria-label={`${eventInfo.name} — início`}
        >
          <img
            src={logoEbd}
            alt={`${eventInfo.name} — ${eventInfo.organization}`}
            className="h-16 w-auto max-w-[320px] object-contain sm:h-18"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden rounded-full sm:inline-flex">
            <a href="#programacao">Ver programação</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">{eventInfo.name}</SheetTitle>
              </SheetHeader>
              <Separator />
              <nav aria-label="Navegação mobile" className="px-4">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <SheetClose asChild>
                  <Button asChild className="mt-6 w-full rounded-full">
                    <a href="#programacao">Ver programação</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
