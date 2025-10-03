"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0b2f] text-white px-8 md:px-16 lg:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="text-green-400 text-3xl font-bold">🤖</div>
            <h2 className="text-2xl font-semibold">Job BotX</h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
         Revolutionizing job search with AI-powered automation. Upload your resume, get personalized LinkedIn job matches delivered to your inbox as organized Excel reports.
          </p>
          <div className="flex gap-6 mt-6 text-gray-300 text-3xl">
            {/* <FaTwitter className="hover:text-[#1DA1F2] transition duration-300 cursor-pointer" /> */}
            {/* <FaFacebookF className="hover:text-[#1877F2] transition duration-300 cursor-pointer" /> */}
            {/* <FaInstagram className="hover:text-[#E1306C] transition duration-300 cursor-pointer" /> */}
            {/* <FaGithub className="hover:text-white transition duration-300 cursor-pointer" /> */}
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
       <p className="text-sm text-gray-300 leading-relaxed">
  No. 45, 5th Cross, Indiranagar,<br />
  Bengaluru, Karnataka 560038
</p>

          <h4 className="mt-6 text-lg font-semibold">Contact</h4>
          {/* <p className="text-sm text-gray-300"></p> */}
          <p className="text-sm text-gray-300">support@jobbotx.com</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">How It Works</li>
            <li className="hover:text-white cursor-pointer transition">Job Search</li>
            <li className="hover:text-white cursor-pointer transition">Features</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer transition">Customer Support</li>
            <li className="hover:text-white cursor-pointer transition">Resume Upload Guide</li>
            <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Job BotX. All rights reserved.</p>
        <p>
          Powered by <span className="text-white font-medium">Job BotX AI</span>
        </p>
      </div>
    </footer>
  );
}
