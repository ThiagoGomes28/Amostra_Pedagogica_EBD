import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ScheduleItem } from "@/components/features/home/data/schedule";

export function ScheduleCard({ item }: { item: ScheduleItem }) {
  return (
    <Card className="rounded-3xl border-border/70 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
      <CardContent className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:gap-6">
        <Badge
          variant="secondary"
          className="w-fit rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary"
        >
          <time>{item.time}</time>
        </Badge>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
