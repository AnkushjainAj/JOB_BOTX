// import React from 'react';

// const Partners = () => {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
//               Partnering in the Journey of
//             </h2>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               <span className="text-purple-600">2,000</span> Thriving Enterprises
//             </h2>
//             <p className="text-gray-600 mb-8">
//               We partner with leading companies across industries to provide the best internship opportunities for our users. 
//               Our extensive network helps connect bright talent with innovative enterprises.
//             </p>
//             <div className="flex flex-wrap gap-4 mb-8">
//               <div className="bg-white p-2 px-4 rounded-full text-sm shadow-sm">
//                 Tech Giants
//               </div>
//               <div className="bg-white p-2 px-4 rounded-full text-sm shadow-sm">
//                 Startups
//               </div>
//               <div className="bg-white p-2 px-4 rounded-full text-sm shadow-sm">
//                 Fortune 500
//               </div>
//               <div className="bg-white p-2 px-4 rounded-full text-sm shadow-sm">
//                 Healthcare
//               </div>
//               <div className="bg-white p-2 px-4 rounded-full text-sm shadow-sm">
//                 E-commerce
//               </div>
//             </div>
//           </div>

//           {/* Partner Logos */}
//           <div className="grid grid-cols-3 gap-6">
//             {/* Row 1 */}
//             <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 hover:shadow-md transition-shadow duration-300">
//               <div className="text-center font-semibold text-gray-500">Partner 1</div>
//             </div>
//             <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 hover:shadow-md transition-shadow duration-300">
//               <div className="text-center font-semibold text-gray-500">Partner 2</div>
//             </div>
//             <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 hover:shadow-md transition-shadow duration-300">
//               <div className="text-center font-semibold text-gray-500">Partner 3</div>
//             </div>

//             {/* Row 2 */}
//             <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 hover:shadow-md transition-shadow duration-300">
//               <div className="text-center font-semibold text-gray-500">Partner 4</div>
//             </div>
//             <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 hover:shadow-md transition-shadow duration-300">
//               <div className="text-center font-semibold text-gray-500">Partner 5</div>
//             </div>
//             <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 hover:shadow-md transition-shadow duration-300">
//               <div className="text-center font-semibold text-gray-500">Partner 6</div>
//             </div>

//             {/* Row 3 */}
//             <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 hover:shadow-md transition-shadow duration-300">
//               <div className="text-center font-semibold text-gray-500">Partner 7</div>
//             </div>
//             <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 hover:shadow-md transition-shadow duration-300">
//               <div className="text-center font-semibold text-gray-500">Partner 8</div>
//             </div>
//             <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 hover:shadow-md transition-shadow duration-300">
//               <div className="text-center font-semibold text-gray-500">Partner 9</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

import React from 'react';

const partners = [
  { name: 'LinkedIn', logo: 'https://logo.clearbit.com/linkedin.com' },
  { name: 'Indeed', logo: 'https://logo.clearbit.com/indeed.com' },
  { name: 'Glassdoor', logo: 'https://logo.clearbit.com/glassdoor.com' },
  { name: 'Monster', logo: 'https://logo.clearbit.com/monster.com' },
  { name: 'ZipRecruiter', logo: 'https://logo.clearbit.com/ziprecruiter.com' },
  { name: 'CareerBuilder', logo: 'https://logo.clearbit.com/careerbuilder.com' },
  { name: 'AngelList', logo: 'https://logo.clearbit.com/angel.co' },
  { name: 'Dice', logo: 'https://logo.clearbit.com/dice.com' },
  { name: 'SimplyHired', logo: 'https://logo.clearbit.com/simplyhired.com' },
];

const Partners = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-200 px-5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Powered by Leading
            </h2>
            <h2 className="text-4xl font-extrabold text-purple-600 mb-6">
              Job Platforms & Networks
            </h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Job BotX integrates with top job platforms and recruitment networks to fetch the most comprehensive and up-to-date job listings. 
              Our advanced scraping technology ensures you never miss the perfect opportunity.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['LinkedIn Jobs', 'Tech Roles', 'Remote Work', 'Startups', 'Enterprise'].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white text-sm px-4 py-2 rounded-full shadow hover:shadow-md transition text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
