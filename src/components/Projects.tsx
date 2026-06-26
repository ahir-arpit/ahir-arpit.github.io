"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { image } from "framer-motion/client";

function ProjectCard({ proj, i }: { proj: any; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
      }}
      className="group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-96 rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-colors duration-500 hover:border-white/20 hover:bg-white/10 cursor-pointer flex flex-col justify-end p-8"
      >
        {proj.image && (
          <img
            src={proj.image}
            alt={proj.title}
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-all duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition duration-500" />

        {/* The content that pops out in 3D */}
        <motion.div
          style={{ translateZ: 50 }}
          className="relative z-10 translate-y-4 group-hover:translate-y-0 transition duration-500"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300 font-medium">{proj.category}</span>
            <span className="text-sm text-gray-500">{proj.year}</span>
          </div>
          <h4 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg">{proj.title}</h4>
        </motion.div>

        {/* Subtle hover glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.05)' }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    { title: "Edu Board Go ", category: "Web / Application ", year: "2026", image: "/edu-board-go.jpg" },
    { title: "Lex Assist Ai", category: "Web Ai ", year: "2025", image: "/lex-assist-ai.png" },
    { title: "Derma Rural Ai", category: "Application", year: "2025", image: "/derma-rural-ai.jpg" },
    { title: "E-Learning Website", category: "Website", year: "2025", image: "/e-learning.png" },
  ];

  return (
    <section className="relative bg-transparent text-white py-20 md:py-24 px-8 md:px-24">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] text-gray-400 mb-16 uppercase font-serif text-center"
        >
          Selected Works
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((proj, i) => (
            <ProjectCard key={i} proj={proj} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
