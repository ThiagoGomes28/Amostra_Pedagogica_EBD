import { CalendarDays, Clock, Church, MapPin, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { directionsUrl, eventInfo, mapsUrl } from "@/components/features/home/data/event";
import mapLocationImage from "@/assets/mapa do local.webp";

const details = [
	{ icon: Church, label: "Igreja", value: eventInfo.church },
	{ icon: MapPin, label: "Endereço", value: eventInfo.address },
	{ icon: CalendarDays, label: "Data", value: eventInfo.date },
	{ icon: Clock, label: "Horário", value: eventInfo.time },
];

export function LocationSection() {
	return (
		<section id="localizacao" className="py-20 sm:py-24">
			<div className="section-shell">
				<SectionHeading
					eyebrow="Localização"
					title="Onde será a Mostra?"
					description="Estamos preparando tudo para receber você, sua família e seus convidados."
				/>

				<div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
					<Reveal>
						<Card className="h-full rounded-3xl border-border/70 shadow-soft">
							<CardContent className="p-7">
								<ul className="space-y-5">
									{details.map((item) => (
										<li key={item.label} className="flex items-start gap-3">
											<span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
												<item.icon className="size-4" aria-hidden="true" />
											</span>
											<span>
												<span className="block text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
													{item.label}
												</span>
												<span className="block text-sm font-semibold text-foreground">
													{item.value}
												</span>
											</span>
										</li>
									))}
								</ul>

								<Separator className="my-6" />

								<Button
									asChild
									className="w-full rounded-full transition-transform hover:-translate-y-0.5"
								>
									<a
										href={directionsUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Navigation className="mr-1 size-4" aria-hidden="true" />
										Como chegar
									</a>
								</Button>
							</CardContent>
						</Card>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="relative h-full min-h-72 overflow-hidden rounded-3xl border border-border/70 bg-primary-soft">
							<img
								src={mapLocationImage}
								alt="Mapa da localização da Igreja Assembleia de Deus em Queimadas"
								className="absolute inset-0 size-full object-cover"
							/>
							<span aria-hidden="true" className="absolute inset-0 bg-primary/10" />
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="group rounded-full border border-primary-foreground/40 bg-primary/25 p-2 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
									<Button
										asChild
										variant="outline"
										className="rounded-full border-primary-foreground/80 bg-primary text-primary-foreground shadow-xl hover:bg-primary hover:text-primary-foreground"
									>
										<a
											href={mapsUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											Abrir no Google Maps
										</a>
									</Button>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
