"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Python", color: "bg-yellow-400", shadow: "shadow-[0_0_15px_rgba(250,204,21,0.6)]" },
  { name: "Node.js", color: "bg-green-500", shadow: "shadow-[0_0_15px_rgba(34,197,94,0.6)]" },
  { name: "HTML", color: "bg-orange-500", shadow: "shadow-[0_0_15px_rgba(249,115,22,0.6)]" },
  { name: "Git", color: "bg-orange-600", shadow: "shadow-[0_0_15px_rgba(234,88,12,0.6)]" },
  { name: "GitHub", color: "bg-gray-400", shadow: "shadow-[0_0_15px_rgba(156,163,175,0.6)]" },
  { name: "Arduino IDE", color: "bg-teal-500", shadow: "shadow-[0_0_15px_rgba(20,184,166,0.6)]" },
  { name: "CSS", color: "bg-blue-500", shadow: "shadow-[0_0_15px_rgba(59,130,246,0.6)]" },
  { name: "IoT", color: "bg-red-500", shadow: "shadow-[0_0_15px_rgba(239,68,68,0.6)]" },
  { name: "Front-End Development", color: "bg-pink-400", shadow: "shadow-[0_0_15px_rgba(244,114,182,0.6)]" },
  { name: "Flask", color: "bg-gray-300", shadow: "shadow-[0_0_15px_rgba(209,213,219,0.6)]" },
  { name: "SQL", color: "bg-blue-400", shadow: "shadow-[0_0_15px_rgba(96,165,250,0.6)]" },
  { name: "Flutter", color: "bg-cyan-400", shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]" },
  { name: "Back-End Web Development", color: "bg-emerald-400", shadow: "shadow-[0_0_15px_rgba(52,211,153,0.6)]" },
  { name: "MongoDB", color: "bg-green-600", shadow: "shadow-[0_0_15px_rgba(22,163,74,0.6)]" },
  { name: "Engineering", color: "bg-indigo-400", shadow: "shadow-[0_0_15px_rgba(129,140,248,0.6)]" },
];

export default function TechStack() {
  return (
    <section className="relative bg-transparent text-white py-20 md:py-32 px-8 md:px-24 flex flex-col justify-center">
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] text-gray-400 mb-16 uppercase font-serif"
        >
          Tools & Technology
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.3)"
              }}
              className="group flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer transition-all duration-300"
            >
              {/* Glowing colored dot */}
              <span className={`w-2.5 h-2.5 rounded-full ${tech.color} ${tech.shadow} group-hover:scale-125 transition-transform duration-300`} />

              <h4 className="text-lg font-medium tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
