import { HeroForm, Navbar } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-[467px] text-[#0F172A]">
      <Navbar />
      <main className="flex-1">
        {/* hero */}
        <div className="py-[48px] px-[16px] md:p-[80px] md:pt-[46px] w-full h-[calc(100vh_-_67px)]  md:h-[calc(100vh_-_86px)] flex flex-col items-center justify-center space-y-[32px]">
          <div className="w-full flex flex-col justify-center items-center gap-[16px]">
            <h2 className="font-extrabold text-[40px] md:text-[72px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#C026D3] to-[#701A75]">
              {" "}
              It's time to take a break
            </h2>
            <p className="text-[#475569] text-[16px] md:text-[20px] text-center">
              Build your meditation skills with an app that gives you all you
              need!
            </p>

            <HeroForm />
          </div>
          <div className="w-full h-[223px] md:h-[660px] rounded-[20px] overflow-hidden border-2 border-[#0F172A]">
            <Image
              src="/hero.png"
              alt="hero image"
              width={400}
              height={400}
              className="w-full object-fill"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
