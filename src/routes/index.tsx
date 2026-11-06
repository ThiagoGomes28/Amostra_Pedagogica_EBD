import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";

const title = "Mostra Pedagógica | Escola Bíblica Dominical";
const description =
  "Conheça a Mostra Pedagógica da Escola Bíblica Dominical: um momento de fé, aprendizado, criatividade e comunhão.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Mostra Pedagógica — Escola Bíblica Dominical",
          description,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          organizer: { "@type": "Organization", name: "Escola Bíblica Dominical" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
