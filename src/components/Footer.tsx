import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] py-12 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Dipesh Ayadi</h2>
          <p className="text-white/50 text-sm mb-6 md:mb-0">a student &bull; Kathmandu, Nepal</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
          <SocialIcons />

          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="tel:+9779865574325"
              className="text-white/80 hover:text-white transition-colors text-lg flex items-center gap-2"
            >
              <span className="text-white/40 font-mono text-sm">TEL</span>
              +977-9865574325
            </a>
            <p className="text-white/30 text-xs mt-2" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Dipesh Ayadi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
