import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-red-500">99 Technolab</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are passionate technologists dedicated to creating innovative solutions 
            that transform businesses and enhance digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1532620651297-482fe21279f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtfGVufDB8fHxibGFja3wxNzUyNDkwOTI1fDA&ixlib=rb-4.1.0&q=85"
                alt="Team collaboration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* Floating stats */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 text-white shadow-2xl">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-2xl border border-gray-700">
              <div className="text-3xl font-bold text-red-400">100+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Crafting Digital Excellence Since 2019
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                At 99 Technolab, we believe in the power of technology to transform 
                businesses and create meaningful connections. Our team of skilled 
                developers, designers, and strategists work collaboratively to deliver 
                solutions that not only meet but exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Users, title: "Expert Team", desc: "Skilled professionals with diverse expertise" },
                { icon: Target, title: "Goal-Oriented", desc: "Focused on achieving your business objectives" },
                { icon: Award, title: "Quality Assured", desc: "Rigorous testing and quality control" },
                { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions and creative thinking" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-red-500 mb-3" />
                  <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;