import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "Full-stack e-commerce solution with payment integration",
      image: "https://images.unsplash.com/photo-1513470270416-d3ff6f16b22f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fGJsYWNrfDE3NTI0OTA5MzF8MA&ixlib=rb-4.1.0&q=85",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1586202690666-e1f32e218afe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fGJsYWNrfDE3NTI0OTA5MzF8MA&ixlib=rb-4.1.0&q=85",
      technologies: ["React Native", "Firebase", "Biometric API"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      category: "web",
      description: "Real-time analytics dashboard with interactive visualizations",
      image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsYWNrfDE3NTI0OTA5MDl8MA&ixlib=rb-4.1.0&q=85",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      category: "web",
      description: "Comprehensive healthcare management platform for hospitals",
      image: "https://images.unsplash.com/photo-1632910110458-435eb54b8d9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsYWNrfDE3NTI0OTA5MDl8MA&ixlib=rb-4.1.0&q=85",
      technologies: ["Vue.js", "Express.js", "MySQL", "Socket.io"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "mobile",
      description: "On-demand food delivery app with real-time tracking",
      image: "https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjB0ZWFtfGVufDB8fHxibGFja3wxNzUyNDkwOTI1fDA&ixlib=rb-4.1.0&q=85",
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "AI-Powered CRM",
      category: "web",
      description: "Customer relationship management system with AI insights",
      image: "https://images.unsplash.com/photo-1532620651297-482fe21279f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtfGVufDB8fHxibGFja3wxNzUyNDkwOTI1fDA&ixlib=rb-4.1.0&q=85",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      link: "#",
      github: "#"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest projects and successful implementations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 transform hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-red-900/30 text-red-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;