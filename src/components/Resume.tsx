export default function Resume() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Background & Experience
          </h2>
          <div className="h-[2px] w-24 bg-white/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Work & Education */}
          <div className="lg:col-span-7 space-y-16">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="text-white/40 mr-4 font-mono text-sm">01</span>
                Work Experience
              </h3>
              <div className="relative pl-8 border-l border-white/10 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-white/20 ring-4 ring-[#121212]" />
                  <h4 className="text-xl font-bold text-white">Social Media Handler</h4>
                  <p className="text-white/60 mb-4">Cresson Craft Private Limited &bull; Jan 2025 - Present</p>
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Managing Instagram and Daraz accounts for Cresson Craft</li>
                    <li>Creating engaging content and community interaction</li>
                    <li>Optimizing strategies for brand visibility and follower growth</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="text-white/40 mr-4 font-mono text-sm">02</span>
                Education
              </h3>
              <div className="relative pl-8 border-l border-white/10 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-white/20 ring-4 ring-[#121212]" />
                  <h4 className="text-xl font-bold text-white">National School of Sciences / NIST</h4>
                  <p className="text-white/60 mb-2">Kathmandu, Nepal &bull; Graduated Aug 2024</p>
                  <p className="text-white/70">
                    <span className="text-white/90 font-medium">Class Rank:</span> Top 25% of the graduating class<br />
                    <span className="text-white/90 font-medium">GPA Grade 12:</span> 3.31 / 4.0<br />
                    <span className="text-white/90 font-medium">GPA Grade 11:</span> 3.12 / 4.0
                  </p>
                </div>
              </div>
            </div>

            {/* Volunteering */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="text-white/40 mr-4 font-mono text-sm">03</span>
                Volunteering
              </h3>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <h4 className="text-lg font-bold text-white">Aama Surakshya Nepal</h4>
                  <p className="text-white/50 text-sm mb-3">Volunteer (11th Grade)</p>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li>Spread awareness regarding pregnancy, maternal health, and safe abortion</li>
                    <li>Prioritized pregnant women and those carrying children in public settings</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <h4 className="text-lg font-bold text-white">Nepal Scout (National Model English Sec. School)</h4>
                  <p className="text-white/50 text-sm mb-3">Member (9th - 10th Grades)</p>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li>Engaged in outdoor activities and community service for environmental awareness</li>
                    <li>Involved in skill-building exercises to develop character and socialize</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <h4 className="text-lg font-bold text-white">Red Cross Society (National School of Sciences)</h4>
                  <p className="text-white/50 text-sm mb-3">Blood Treasurer (11th & 12th Grades)</p>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li>Organized and volunteered during blood donation programs</li>
                    <li>Maintained strict records of blood donors and recipients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Honors, Involvement, Hobbies */}
          <div className="lg:col-span-5 space-y-12">
            {/* Honors & Awards */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Honors & Awards</h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start">
                  <span className="text-white/40 mr-3 mt-1">✦</span>
                  <span><strong>Student of the Year</strong> &mdash; 10th Grade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/40 mr-3 mt-1">✦</span>
                  <span><strong>1st Place</strong> &mdash; Inter-school Cricket (11th Grade)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/40 mr-3 mt-1">✦</span>
                  <span><strong>1st Place</strong> &mdash; Inter-valley Futsal (12th Grade)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/40 mr-3 mt-1">✦</span>
                  <span><strong>2nd Place</strong> &mdash; Inter-school Volleyball (9th Grade)</span>
                </li>
              </ul>
            </div>

            {/* School Involvement */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Involvement</h3>
              <div className="space-y-6 text-white/70">
                <div>
                  <h4 className="text-white font-semibold">NSS's Student Club</h4>
                  <p className="text-sm">Vice President (11th Grade) <br/> Joint Secretary (12th Grade)</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">NSS's Sports Club</h4>
                  <p className="text-sm">Vice President (11th Grade) <br/> Volunteer & Event Coordinator (11th/12th Grade)</p>
                </div>
              </div>
            </div>

            {/* Interests & Hobbies */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Traveling", "Hiking", "Running", "Photography", 
                  "Watching movies", "Heavy metal music", "Learning new technology", 
                  "Cricket", "Podcasts"
                ].map((hobby, i) => (
                  <span key={i} className="px-3 py-1 text-sm rounded-full bg-white/5 text-white/80 border border-white/10">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
