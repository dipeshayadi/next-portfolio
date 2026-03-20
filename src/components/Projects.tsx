export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Experience",
      category: "Web App",
      description: "A seamless shopping journey built with modern web tech.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    },
    {
      title: "Interactive WebGL Dashboard",
      category: "Interface Design",
      description: "Real-time data visualization running smoothly in the browser.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Immersive 3D Portfolio",
      category: "Creative Coding",
      description: "Pushing the boundaries of what is possible on the web.",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80",
    },
    {
      title: "Fintech Platform",
      category: "Product Engineering",
      description: "Secure, scalable, and beautifully designed financial tools.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    },
  ];

  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Selected<br />Work
            </h2>
            <div className="h-[2px] w-32 bg-white/20" />
          </div>
          <p className="text-white/50 max-w-sm text-lg">
            A showcase of recent premium digital projects, emphasizing aesthetics and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden backdrop-blur-md bg-[#1a1a1a] border border-white/5 hover:border-white/20 transition-all duration-700 ${
                i % 2 !== 0 ? "md:translate-y-24" : ""
              }`}
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-out z-0"
              />

              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

              {/* Card content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-20">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-sm font-mono uppercase tracking-widest text-white/60 mb-4 block drop-shadow-md">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
