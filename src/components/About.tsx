"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-transparent text-white py-20 md:py-32 px-8 md:px-24 flex flex-col justify-center">
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] text-gray-400 mb-8 uppercase font-serif"
        >
          About Me
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-sans text-gray-200 leading-relaxed font-light text-justify"
        >
          <p className="mb-6">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"> Software Developer</span> with a strong interest in building scalable, high-performance web and mobile applications using modern technologies. Skilled in Full Stack Development, AI integration, Flutter app development, and DevOps practices, I enjoy creating clean, efficient, and user-focused digital solutions.
          </p>
          <p>
            I have experience working with technologies like HTML, CSS, JavaScript, FastAPI, Node.js, Flutter, MongoDB, and cloud-based tools to develop responsive and impactful applications. Constantly learning and exploring new technologies, I am driven by innovation, problem-solving, and the goal of delivering seamless digital experiences that create real-world impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
