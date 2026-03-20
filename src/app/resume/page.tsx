import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <main className="relative w-full bg-[#121212] pt-24 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Experience & Education</h1>
        <p className="text-white/50 text-lg">My professional journey so far.</p>
      </div>
      <Resume />
      <div className="mt-auto w-full">
        <Footer />
      </div>
    </main>
  );
}
