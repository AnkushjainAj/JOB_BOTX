"use client";
import React from "react";

const internships = [
  {
    title: "Web Development",
    image: "https://tse1.mm.bing.net/th?id=OIP.Ly5Ght-CfZYUgAEhLCJ-LQHaFr&pid=Api&P=0&h=220",
  },
  {
    title: "Android Development",
    image: "https://tse4.mm.bing.net/th?id=OIP.qVFr2py0bEakL8PtXTw1YgHaHa&pid=Api&P=0&h=220",
  },
  {
    title: "Data Science",
    image: "https://tse1.mm.bing.net/th?id=OIP.fgp_ZgVnO6dwxQ89uwxPjAHaHa&pid=Api&P=0&h=220",
  },
  {
    title: "Java Programming",
    image: "https://tse4.mm.bing.net/th?id=OIP.pnT2FUqMNniPCVwjXUm84AHaE8&pid=Api&P=0&h=220",
  },
  {
    title: "Machine Learning",
    image: "https://tse3.mm.bing.net/th?id=OIP.uXxYfzWDVlsz9nEoBpv3aQHaHa&pid=Api&P=0&h=220",
  },
  {
    title: "Python Programming",
    image: "https://tse1.mm.bing.net/th?id=OIP.ryMYkWHd5QIJI4w5_QuT9QHaFu&pid=Api&P=0&h=220",
  },
  {
    title: "UI/UX Design",
    image: "https://tse4.mm.bing.net/th?id=OIP.U4jeOLahR47Oq-NT5b39ygHaF7&pid=Api&P=0&h=220",
  },
  {
    title: "Artificial Intelligence",
    image: "https://tse3.mm.bing.net/th?id=OIP.xcTo9qbcneGWZsQVJ5ZPngHaHa&pid=Api&P=0&h=220",
  },
];

const InternshipCards = () => {
  return (
   <section className="py-16 bg-white px-4 sm:px-8 lg:px-16" id="job">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-white">Internships We Offer</h2>
    <p className="text-black-400 mt-2 text-lg font-bold">
      Explore our range of hands-on internship programs designed to boost your career.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-6">
    {internships.map((item, i) => (
<div
  key={i}
  className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[300px] 
             bg-white 
             border-2 border-black-100 
             rounded-2xl 
             p-5 
             shadow-md 
             transition-all duration-300 ease-in-out 
             flex flex-col items-center justify-between 
             hover:shadow-xl hover:border-cyan-400 hover:scale-105"
>

        <img
          src={item.image}
          alt={item.title}
          className="h-24 object-contain"
        />
        <h3 className="text-xl font-semibold text-center text-gray-800 mt-4">
          {item.title}
        </h3>
        <a href="https://forms.gle/B15a3mZqYEL6saRA8"><button className="bg-black text-white font-medium py-2 px-6 rounded-full mt-4 hover:bg-gray-800 transition">
          Apply Now
        </button>
        </a>
      </div>
    ))}
  </div>
</section>

  );
};

export default InternshipCards;
