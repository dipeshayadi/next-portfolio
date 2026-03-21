"use client";

import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";

export default function ContactPage() {
  return (
    <main className="relative w-full bg-[#121212] pt-32 min-h-screen flex flex-col justify-between">
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-8">

        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Let's build something <span className="text-white/50 italic">amazing</span> together.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light mb-12">
            Whether you have a question, a project idea, or simply want to say hello, I'm always open to discussing new opportunities.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-white/40 text-sm font-mono tracking-widest uppercase mb-2">Email</p>
              <a href="mailto:dipeshayadi1234@gmail.com" className="text-2xl md:text-3xl text-white hover:text-white/70 transition-colors">
                dipeshayadi1234@gmail.com
              </a>
            </div>

            <div>
              <p className="text-white/40 text-sm font-mono tracking-widest uppercase mb-2">Phone</p>
              <a href="tel:+9779865574325" className="text-2xl md:text-3xl text-white hover:text-white/70 transition-colors">
                +977-9865574325
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 w-full md:w-auto backdrop-blur-sm flex flex-col items-center">
          <p className="text-white text-lg mb-6 font-medium text-center">Find me on</p>
          <div className="scale-125 origin-center">
            <SocialIcons />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
