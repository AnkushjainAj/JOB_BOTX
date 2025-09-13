"use client";

import { Linkedin } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hiii")
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
        }),
      });
      console.log(response)
      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })
        alert("Message sent successfully!");
      } else {
        alert("Error sending message!");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-200" id="contact">
      {/* 📌 Top Banner */}
      <div className="relative h-48 w-full overflow-hidden shadow-md">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-4xl font-bold drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>

      {/* 📞 Contact Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-14 -mt-10 relative z-10">
        {/* 💬 Contact Form */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Let’s Connect</h2>
          <p className="text-sm text-gray-600 mb-6">
            Whether you're a student or a partner organization — feel free to reach out!
          </p>

          {/* 👉 FormSubmit form: auto-sends to your Gmail */}
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />

            {/* Hidden honeypot to prevent spam */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">🔒 Your information is safe with us.</p>
        </div>

        {/* 📨 Contact Info Box */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md flex flex-col justify-between">
          <div className="h-36 w-full rounded-lg overflow-hidden ">
            <img
              src="/logox.png"
              alt="Contact Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-sm text-gray-700">
            {/* <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">📞</span>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 98765 43210</p>
              </div>
            </div> */}

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">📧</span>
              <div>
                <p className="font-semibold text-xl">Email</p>
                
              </div>
             
            </div>
             <a
                  href="mailto:services.hirelyft@gmail.com"
                  className="text-blue-600 underline"
                >
               services.hirelyft@gmail.com
                </a>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">🌐</span>
              <div>
                <p className="font-semibold text-xl">Website</p>
                
              </div>
              
            </div>
            <a
                  href="https://hyre-lyft.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  www.hirelyft.info
                </a>
             <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl"><Linkedin/></span>
              <div>
                <p className="font-semibold text-xl">LinkedIn</p>
                
              </div>
              
            </div>
            <a
                  href="https://www.linkedin.com/company/hirelyft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  linkedin.com/company/hirelyft/
             </a>

          </div>

          <div className="pt-4 border-t mt-6 text-sm">
            <h4 className="font-semibold text-gray-800 mb-1">🕒 Hours</h4>
            <p className="text-gray-600">Mon–Sat | 10 AM – 6 PM IST</p>
            <p className="text-xs text-gray-500 mt-1">
              For quick help, explore our FAQ or Internship pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
