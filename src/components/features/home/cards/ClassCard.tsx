import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ClassInfo } from "@/components/features/home/data/classes";

export function ClassCard({
  classInfo,
  onSelect,
}: {
  classInfo: ClassInfo;
  onSelect: () => void;
}) {
  return (
    <Card className="group h-full overflow-hidden rounded-3xl border-border/70 p-0 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <button
        type="button"
        onClick={onSelect}
        className="flex h-full w-full flex-col text-left"
        aria-label={`Ver detalhes da turma ${classInfo.name}`}
      >
        <div className="overflow-hidden">
          <img
            src={classInfo.image}
            alt={`Turma ${classInfo.name} durante as atividades da Escola Bíblica Dominical`}
            loading="lazy"
            width={900}
            height={700}
            className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <CardContent className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground">
              {classInfo.name}
            </h3>
            <Badge
              variant="secondary"
              className="rounded-full bg-secondary text-[11px] font-medium text-muted-foreground"
            >
              {classInfo.ageRange}
            </Badge>
          </div>
          <p className="mt-3 text-sm font-medium text-primary">
            Tema: {classInfo.theme}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {classInfo.description}
          </p>
          <span className="mt-auto pt-5 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
            Ver detalhes
          </span>
        </CardContent>
      </button>
    </Card>
  );
}
