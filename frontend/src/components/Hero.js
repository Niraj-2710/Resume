import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code, Zap, Shield, Cpu } from "lucide-react";

// Custom typing effect hook
const useTypingEffect = (strings, speed = 50, backSpeed = 30) => {
  const [displayText, setDisplayText] = useState("");
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    const currentString = strings[currentStringIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setDisplayText(prev => currentString.substring(0, prev.length - 1));
        
        if (displayText.length <= 1) {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      } else {
        setDisplayText(prev => currentString.substring(0, prev.length + 1));
        
        if (displayText.length >= currentString.length - 1) {
          setIsPaused(true);
        }
      }
    }, isPaused ? 2000 : isDeleting ? backSpeed : speed);

    return () => clearTimeout(timeout);
  }, [strings, displayText, currentStringIndex, isDeleting, isPaused, speed, backSpeed]);

  return displayText;
};

const Hero = () => {
  const videoRef = useRef(null);
  
  const typingStrings = [
    "We Build Digital Solutions",
    "We Create Web Applications",
    "We Develop Mobile Apps",
    "We Design User Experiences",
    "We Innovate Beyond Limits"
  ];

  const typedText = useTypingEffect(typingStrings);

  useEffect(() => {
    // Create a programming animation in the background
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with programming theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsYWNrfDE3NTI0OTA5MDl8MA&ixlib=rb-4.1.0&q=85')"
        }}
      ></div>

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-900 opacity-10 font-mono text-xs md:text-sm"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {['function()', 'const data = {}', 'return true;', 'if (condition)', 'async/await', 'import React', 'export default', 'className=""', 'useState()', 'useEffect()'][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">99</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">99 TECHNOLAB</h1>
              <p className="text-red-400 text-sm">Innovation Beyond Code</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-30 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Code
            </span>
            <br />
            <span className="text-red-500">Excellence</span>
          </h2>
          <div className="text-2xl md:text-3xl text-gray-300 font-light mb-8 h-12 flex items-center justify-center">
            <span className="text-red-400">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions. 
            We specialize in web development, mobile apps, and digital innovation 
            that drives results.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
          <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View Portfolio
          </button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { icon: Code, title: "Clean Code", desc: "Maintainable & Scalable" },
            { icon: Zap, title: "Fast Performance", desc: "Optimized Solutions" },
            { icon: Shield, title: "Secure", desc: "Enterprise-grade Security" },
            { icon: Cpu, title: "Modern Tech", desc: "Latest Technologies" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <feature.icon className="w-8 h-8 text-red-500 mb-4 mx-auto" />
              <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-red-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;