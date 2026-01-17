import Image from "next/image";
import { LuCalendarDays } from "react-icons/lu";
import { HiArrowSmallDown } from "react-icons/hi2";

export default function HeroSection() {
  return (
    /* ===== SECTION HERO ===== */
    <main className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-6 text-white">
      
        {/* ===== LOGO + TEXTE ===== */}
        <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-6 bg-white px-20 py-10 rounded-full shadow-[0_0_35px_rgba(74,222,128,0.6)]">
            
                <Image
                    src="/2_Logo_Bulle.png"
                    alt="Logo"
                    width={28}
                    height={28}
                    className="shrink-0"
                />

               <span className="text-sm font-extrabold text-[#1C1C1C] overflow-hidden text-ellipsis whitespace-nowrap sm:text-lg sm:overflow-visible sm:whitespace-nowrap md:text-xl lg:text-2xl xl:text-3xl uppercase">
                    CRÉER UN SITE WEB{" "}
                    <span className="underline decoration-2 underline-offset-4">
                        VRAIMENT
                    </span>{" "}
                UNIQUE
                </span>
            </div>
        </div>

        {/* ===== TITRE PRINCIPAL ===== */}
        <h1 className="text-center  md:text-6xl leading-tight max-w-4xl mb-6 animate-fade-in animate-delay-200">
            Votre <span className="text-[#4ade80]">site</span> doit{" "}
            <span className="text-[#4ade80]">donner envie</span> de{" "}
            <span className="text-[#4ade80]">rester</span>, pas de{" "}
            <span className="text-[#4ade80] line-through decoration-black">
            revenir
            </span>{" "}
            <span className="line-through decoration-black">en</span> {" "}
            <span className="text-[#4ade80] line-through decoration-black opacity-60">
           <br /> arrière
            </span>.
        </h1>

        {/* ===== SOUS-TEXTE ===== */}
        <p className="text-gray-400 font-extrabold text-center max-w-2xl text-sm md:text-base mb-12 animate-fade-in animate-delay-400">
            Design moderne, SEO solide, Suivi complet :
            <br />
            on construit un site qui retient vos visiteurs et vous apporte des résultats.
        </p>

        {/* ===== BOUTONS D'ACTION ===== */}
        <div className="relative flex flex-col md:flex-row items-center gap-4 animate-fade-in animate-delay-600">
            
            {/* Bouton RDV */}
            <button className="bg-[#4ade80] text-black font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-[#3bc771] transition">
                <LuCalendarDays className="text-xl " />
                Prendre RDV
            </button>

            {/* Bouton projets */}
            <button className="border border-[#4ade80] font-extrabold text-[#4ade80] px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-[#4ade80]/10 transition">
                Découvrir nos projets
                <HiArrowSmallDown className="text-xl" />
            </button>

            {/* Illustration clic */}
            <div className="absolute -left-10 -bottom-10 hidden md:block animate-click">
                <Image
                    src="/3_Un_Ptit_Click.png"
                    alt="Un p'tit click ?"
                    width={100}
                    height={80}
                />
            </div>
        </div>
    </main>
  );
}
