import Image from "next/image";


export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#0b0b28] text-white px-6 py-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10" id="about">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold">
       🚀 Kickstart Your Career with <span className="text-indigo-400">HireLyft</span>
        </h1>
        <p className="text-red-300 leading-relaxed text-lg">
         HireLyft connects students with real, verified internships across top startups and companies. Whether you’re exploring career options or ready to get hands-on, we make your journey simple and rewarding.
        </p>

        <div className="space-y-8 border-l- border-gray-700 pl-6">
          {/* Step 1 */}
          <div>
            <h2 className="text-xl font-semibold text-lime-400 flex items-center gap-4">
              <span className="text-2xl font-bold">🔍</span> Explore Opportunities
            </h2>
            <p className="text-gray-400 text-sm mt-1 font-bold">
            Browse internships in tech, marketing, design, business, and more — handpicked to match your interests and skills.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="text-xl font-semibold text-white flex items-center gap-4">
              <span className="text-2xl font-bold">⚡</span>  Apply Effortlessly
            </h2>
            <p className="text-gray-400 text-sm mt-1 font-bold">
              No long forms. No confusion. Create your profile once and apply to multiple internships in just a click.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="text-xl font-semibold text-pink-400 flex items-center gap-4">
              <span className="text-2xl font-bold">🤝</span>  Grow with Mentorship
            </h2>
            <p className="text-gray-400 text-sm mt-1 font-bold">
             Learn from experienced professionals, work on real projects, and build connections that boost your future.
            </p>
          </div>
        </div>
      </div>

      {/* Right Placeholder Block */}
     {/* Right Placeholder Block */}
<div className="relative w-full lg:w-[500px] h-[400px] rounded-xl bg-gray-800 flex items-center justify-center shadow-2xl overflow-hidden">
  <div className="absolute -top-2 -left-2 bg-blue-500 text-white px-5 py-2 rounded-full text-center shadow-xl z-10">
    <div className="text-3xl font-bold">10+</div>
    <div className="text-xs">Years of Experience</div>
  </div>

  <img
    src="https://static.vecteezy.com/system/resources/previews/011/637/858/original/internship-flat-style-illustration-design-free-vector.jpg"
    alt="Internship Illustration"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'inherit',  // keep rounded corners same as container
    }}
  />
</div>

    </div>
  );
}
