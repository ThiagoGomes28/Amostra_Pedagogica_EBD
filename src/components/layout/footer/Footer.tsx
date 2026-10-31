import { BookOpenText, Instagram, MapPin, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { eventInfo, navLinks } from "@/components/features/home/data/event";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="section-shell py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <BookOpenText className="size-4.5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-foreground">
                {eventInfo.name} — {eventInfo.organization}
              </span>
            </div>
            <p className="mt-4 max-w-sm font-serif text-lg text-foreground/80">
              “{eventInfo.tagline}”
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                {eventInfo.church} — {eventInfo.address}
              </span>
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="text-sm font-semibold text-foreground">Navegação</h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Contato</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={eventInfo.instagram}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram className="size-4" aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={eventInfo.whatsapp}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {eventInfo.organization}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
