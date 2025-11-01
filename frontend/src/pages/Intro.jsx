// import React from 'react'

// const Intro = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center px-6">
//             <div className="max-w-3xl">
//                 <h1 className="text-gray-300 text-lg sm:text-xl md:text-2xl font-medium mb-2">
//                     Hi, I am
//                 </h1>
//                 <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
//                     Amit Sahoo
//                 </h1>
//                 <h2 className="text-blue-400 text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
//                     I build things for the web
//                 </h2>
//                 <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
//                     I’m a passionate web developer focused on creating interactive, responsive, and user-friendly web experiences. I love turning ideas into reality using modern technologies.
//                 </p>
//                 <button className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-4 py-2 mt-3  rounded-full font-semibold hover:opacity-90 transition duration-300">
//                     Get Started
//                 </button>

//             </div>
//         </div>
//     )
// }

// export default Intro






import React, { useEffect, useState } from "react";
import axios from "axios";

const Intro = () => {
  const [intro, setIntro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URI}/api/portfolio/intro`);
        console.log("Response:", res.data); // 👈 check in console

        if (res.data && res.data.data && res.data.data.length > 0) {
          setIntro(res.data.data[0]); // ✅ Correct path
        } else {
          console.warn("No intro data found");
        }
      } catch (error) {
        console.error("Error fetching intro data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIntro();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300 text-xl">
        Loading...
      </div>
    );
  }

  if (!intro) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300 text-xl">
        No Intro Data Found
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-gray-300 text-lg sm:text-xl md:text-2xl font-medium mb-2">
          {intro.welcomeText}
        </h1>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          {intro.firstName} {intro.lastName}
        </h1>

        <h2 className="text-blue-400 text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          {intro.caption}
        </h2>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
          {intro.description}
        </p>

        <button className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-4 py-2 mt-3 rounded-full font-semibold hover:opacity-90 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Intro;
