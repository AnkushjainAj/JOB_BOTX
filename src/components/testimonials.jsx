// pages/testimonials.tsx
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Business Intern",
    text: "The virtual internship gave me hands-on exposure to real projects and helped me build confidence in a professional setting.",
    image: "https://tse3.mm.bing.net/th?id=OIP.tHoXCdncHBSqVXXwJ7FIPwHaE7&pid=Api&P=0&h=220",
  },
  {
    name: "Ravi Verma",
    role: "Frontend Developer Intern",
    text: "Amazing mentorship and a collaborative team made the remote internship productive and engaging.",
    image: "https://tse2.mm.bing.net/th?id=OIP._C1Qi66cVtH8UrZk48nn9AHaEK&pid=Api&P=0&h=220",
  },
  {
    name: "Megha Iyer",
    role: "Content Writing Intern",
    text: "I loved the flexible working hours and the focus on skill-building throughout the internship journey.",
    image: "https://tse1.mm.bing.net/th?id=OIP.n-76d4Sh0jA5ZDeEbzZXlQHaE8&pid=Api&P=0&h=220",
  },
  {
    name: "Aditya Singh",
    role: "Data Analyst Intern",
    text: "This internship helped me apply my classroom knowledge to real-world scenarios with constant mentor support.",
    image: "https://tse4.mm.bing.net/th?id=OIP.SMv8Nk9P77heLGwK4sq-5wHaHa&pid=Api&P=0&h=220",
  },
];


export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#fce4ec] py-16 px-4 sm:px-6 lg:px-20 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-[#222] drop-shadow-md mb-6">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
          Real experiences from real people. Discover how we've helped professionals achieve their goals.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left main visual */}
        <div className="flex justify-center">
  <img
    src="/review.jpg"
    alt="Main Person"
    className="rounded-3xl shadow-2xl border-4 border-white object-cover w-full max-w-[460px] h-[360px]"
  />
</div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <span className="text-xs text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
