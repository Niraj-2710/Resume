import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);

  // Indian languages with the company name
  const languages = [
    { text: "99 ટેકનોલેબ", lang: "Gujarati" },
    { text: "99 Technolab", lang: "English" },
    { text: "99 टेक्नोलैब", lang: "Hindi" },
    { text: "99 టెక్నోలాబ్", lang: "Telugu" },
    { text: "99 டெக்னோலாப்", lang: "Tamil" },
    { text: "99 ಟೆಕ್ನೋಲಾಬ್", lang: "Kannada" },
    { text: "99 ടെക്നോലാബ്", lang: "Malayalam" },
    { text: "99 टेक्नोलॅब", lang: "Marathi" },
    { text: "99 টেকনোল্যাব", lang: "Bengali" },
    { text: "99 TECHNOLAB", lang: "English" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-red-900 to-transparent"></div>
      </div>

      {/* Floating code particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-800 opacity-30 font-mono text-sm"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {['</', '/>', '{}', '[]', '()', '<=', '=>', '&&', '||', '++'][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo container */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-900 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-white text-2xl font-bold">99</span>
          </div>
        </motion.div>

        {/* Company name in different languages */}
        <motion.div
          key={currentLanguage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {languages[currentLanguage].text}
          </h1>
          <p className="text-red-400 text-lg font-medium tracking-wider">
            {languages[currentLanguage].lang}
          </p>
        </motion.div>

        {/* Loading animation */}
        <div className="flex justify-center space-x-2 mb-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-red-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-300 text-lg"
        >
          Code Excellence. Innovation Beyond.
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="mt-8 w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;