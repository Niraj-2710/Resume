import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Cloud, Code, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1513470270416-d3ff6f16b22f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fGJsYWNrfDE3NTI0OTA5MzF8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      image: "https://images.unsplash.com/photo-1586202690666-e1f32e218afe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fGJsYWNrfDE3NTI0OTA5MzF8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Scalable database design and optimization for enterprise applications",
      features: ["MongoDB", "PostgreSQL", "MySQL", "Data Migration"],
      image: "https://images.unsplash.com/photo-1632910110458-435eb54b8d9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsYWNrfDE3NTI0OTA5MDl8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and management for scalable applications",
      features: ["AWS", "Google Cloud", "Azure", "DevOps"],
      image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsYWNrfDE3NTI0OTA5MDl8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Code,
      title: "API Development",
      description: "RESTful APIs and microservices for seamless integrations",
      features: ["REST APIs", "GraphQL", "Microservices", "API Security"],
      image: "https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjB0ZWFtfGVufDB8fHxibGFja3wxNzUyNDkwOTI1fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience",
      features: ["Figma Design", "Prototyping", "User Research", "Design Systems"],
      image: "https://images.unsplash.com/photo-1532620651297-482fe21279f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtfGVufDB8fHxibGFja3wxNzUyNDkwOTI1fDA&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 transform hover:scale-105">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-red-500" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-red-800">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how we can bring your vision to life with our expertise
            </p>
            <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;