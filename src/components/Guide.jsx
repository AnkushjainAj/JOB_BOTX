import Image from "next/image";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#0b0b28] text-white px-6 py-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10" id="about">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold">
       🤖 Automate Your Job Hunt with <span className="text-indigo-400">Job BotX</span>
        </h1>
        <p className="text-red-300 leading-relaxed text-lg">
         Job BotX revolutionizes job searching by automatically finding and delivering personalized job opportunities from LinkedIn directly to your inbox. Simply upload your resume, and let our AI do the work.
        </p>

        <div className="space-y-8 border-l- border-gray-700 pl-6">
          {/* Step 1 */}
          <div>
            <h2 className="text-xl font-semibold text-lime-400 flex items-center gap-4">
              <span className="text-2xl font-bold">📄</span> Upload Your Resume
            </h2>
            <p className="text-gray-400 text-sm mt-1 font-bold">
              Simply upload your resume and provide your email. Our AI analyzes your skills, experience, and career goals.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="text-xl font-semibold text-white flex items-center gap-4">
              <span className="text-2xl font-bold">🔍</span> AI Job Matching
            </h2>
            <p className="text-gray-400 text-sm mt-1 font-bold">
              Our bot automatically searches LinkedIn for jobs that match your profile, skills, and preferences in real-time.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="text-xl font-semibold text-pink-400 flex items-center gap-4">
              <span className="text-2xl font-bold">📧</span> Get Excel Reports
            </h2>
            <p className="text-gray-400 text-sm mt-1 font-bold">
             Receive organized Excel sheets with job details, company info, and application links directly in your email inbox.
            </p>
          </div>
        </div>
      </div>

      {/* Right Placeholder Block */}
      <div className="relative w-full lg:w-[500px] h-[400px] rounded-xl bg-gray-800 flex items-center justify-center shadow-2xl overflow-hidden">
        <div className="absolute -top-2 -left-2 bg-blue-500 text-white px-5 py-2 rounded-full text-center shadow-xl z-10">
          <div className="text-3xl font-bold">24/7</div>
          <div className="text-xs">Job Monitoring</div>
        </div>

        <img
          src="https://static.vecteezy.com/system/resources/previews/011/637/858/original/internship-flat-style-illustration-design-free-vector.jpg"
          alt="Job Search Automation"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 'inherit',
          }}
        />
      </div>
    </div>
  );
}
