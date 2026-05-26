"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", color: "bg-cyan-400", shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]" },
  { name: "Next.js", color: "bg-white", shadow: "shadow-[0_0_15px_rgba(255,255,255,0.6)]" },
  { name: "TypeScript", color: "bg-blue-500", shadow: "shadow-[0_0_15px_rgba(59,130,246,0.6)]" },
  { name: "Three.js", color: "bg-orange-400", shadow: "shadow-[0_0_15px_rgba(251,146,60,0.6)]" },
  { name: "Framer Motion", color: "bg-purple-500", shadow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]" },
  { name: "Tailwind CSS", color: "bg-cyan-500", shadow: "shadow-[0_0_15px_rgba(6,182,212,0.6)]" },
  { name: "Node.js", color: "bg-green-500", shadow: "shadow-[0_0_15px_rgba(34,197,94,0.6)]" },
  { name: "Python", color: "bg-yellow-400", shadow: "shadow-[0_0_15px_rgba(250,204,21,0.6)]" },
  { name: "C++", color: "bg-blue-600", shadow: "shadow-[0_0_15px_rgba(37,99,235,0.6)]" },
  { name: "IoT", color: "bg-red-500", shadow: "shadow-[0_0_15px_rgba(239,68,68,0.6)]" },
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
