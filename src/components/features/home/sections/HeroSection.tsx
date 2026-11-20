import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookCover from "@/assets/livro.webp";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-(--background) px-2 pt-28 pb-16 sm:px-4 sm:pt-32 lg:px-6 lg:pt-36 lg:pb-24 xl:px-8 xl:pt-40 xl:pb-28"
    >

      <div className="section-shell grid w-full items-center justify-items-center gap-12 lg:max-w-4xl lg:grid-cols-1 lg:justify-self-center lg:gap-10 xl:max-w-7xl xl:grid-cols-[1.1fr_0.9fr] xl:justify-items-stretch xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -26, y: 18 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-xl lg:mx-auto lg:text-center xl:max-w-2xl xl:text-left"
        >
          <div className="flex flex-wrap items-center gap-3 lg:justify-center xl:justify-start">
            <p className="inline-flex rounded-full border border-[#7d5840]/20 bg-[#f7f1e7]/80 px-3 py-1.5 text-[11px] font-bold tracking-[0.22em] text-[#4d2f1f] shadow-soft backdrop-blur-sm">
              MOSTRA PEDAGÓGICA EBD
            </p>

            <div className="inline-flex rounded-full border border-[#af835a]/30 bg-[#f5e9d8]/80 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-[#67482f] uppercase shadow-sm">
              Lançamento Especial
            </div>
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#1b140f] sm:text-5xl lg:text-[4.15rem] lg:leading-[0.9] xl:text-[4.75rem]">
            A HISTÓRIA DA ASSEMBLEIA DE DEUS
            <span className="mt-2 block">EM QUEIMADAS-PB</span>
          </h1>

          <div className="mt-6 lg:hidden">
            <img
              src={bookCover}
              alt="Capa do livro A História da Assembleia de Deus em Queimadas-PB"
              className="mx-auto h-auto w-[min(70vw,300px)] object-contain drop-shadow-[0_18px_28px_rgba(26,18,12,0.14)] sm:w-[min(65vw,340px)]"
            />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a382d] sm:text-lg lg:mx-auto lg:max-w-2xl lg:text-lg xl:mx-0 xl:max-w-2xl xl:text-xl">
            Conhecendo a Palavra, Preservando Nossa História e Fortalecendo Nossa Fé.
          </p>

          <div className="mt-10 flex flex-col gap-3 lg:mt-12 lg:items-center xl:mt-14 xl:items-start">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-[#1d1713] px-6 text-sm font-semibold tracking-[0.08em] text-[#f4ebdf] shadow-[0_18px_30px_rgba(29,23,19,0.18)] transition-transform hover:-translate-y-0.5 xl:px-8 xl:text-base"
            >
              <a href="https://drive.google.com/file/d/14QRY5KATuVXxOCV4tCju5wDGkCuzaeeu/view" target="_blank" rel="noopener noreferrer">
                CONHEÇA O LIVRO
                <ArrowRight
                  className="ml-2 size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[#1d1713]/25 px-6 text-sm font-semibold tracking-[0.08em] text-[#1d1713] shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-[#1d1713] hover:text-[#f4ebdf] xl:px-8 xl:text-base"
            >
              <a href="https://wa.me/5583991560850?text=Ol%C3%A1%21%20Vi%20o%20livro%20%2A%E2%80%9CA%20Hist%C3%B3ria%20da%20Assembleia%20de%20Deus%20em%20Queimadas-PB%E2%80%9D%2A%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20adquiri-lo.%20Poderia%20me%20informar%20o%20valor%20e%20como%20posso%20fazer%20a%20compra%3F" target="_blank" rel="noopener noreferrer">
                QUERO ADQUIRIR O LIVRO
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="relative hidden justify-center lg:flex lg:justify-center xl:flex xl:justify-end"
        >
          <div className="w-full max-w-110 xl:max-w-125">
            <img
              src={bookCover}
              alt="Capa do livro A História da Assembleia de Deus em Queimadas-PB"
              className="mx-auto h-auto w-[min(72vw,360px)] object-contain drop-shadow-[0_18px_28px_rgba(26,18,12,0.14)] lg:w-[min(38vw,390px)] xl:w-[min(38vw,460px)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
