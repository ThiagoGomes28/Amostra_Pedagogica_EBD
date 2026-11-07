import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookCover from "@/assets/livro.png";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[var(--background)] px-2 pt-28 pb-16 sm:px-4 sm:pt-32 lg:px-6 lg:pt-36 lg:pb-24"
    >

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -26, y: 18 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full border border-[#7d5840]/20 bg-[#f7f1e7]/80 px-3 py-1.5 text-[11px] font-bold tracking-[0.22em] text-[#4d2f1f] shadow-soft backdrop-blur-sm">
              MOSTRA PEDAGÓGICA EBD
            </p>

            <div className="inline-flex rounded-full border border-[#af835a]/30 bg-[#f5e9d8]/80 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-[#67482f] uppercase shadow-sm">
              Lançamento Especial
            </div>
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#1b140f] sm:text-5xl lg:text-[4.15rem] lg:leading-[0.9]">
            A HISTÓRIA DA ASSEMBLEIA DE DEUS
            <span className="mt-2 block">EM QUEIMADAS-PB</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a382d] sm:text-lg">
            Conhecendo a Palavra, Preservando Nossa História e Fortalecendo Nossa Fé.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-[#1d1713] px-6 text-sm font-semibold tracking-[0.08em] text-[#f4ebdf] shadow-[0_18px_30px_rgba(29,23,19,0.18)] transition-transform hover:-translate-y-0.5"
            >
              <a href="#sobre">
                CONHEÇA O LIVRO
                <ArrowRight
                  className="ml-2 size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[440px]">
            <img
              src={bookCover}
              alt="Capa do livro A História da Assembleia de Deus em Queimadas-PB"
              className="mx-auto h-auto w-[min(72vw,360px)] object-contain drop-shadow-[0_18px_28px_rgba(26,18,12,0.14)] sm:w-[min(62vw,380px)] lg:w-[min(70vw,420px)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
