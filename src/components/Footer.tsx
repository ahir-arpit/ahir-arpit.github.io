"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Footer() {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <footer ref={containerRef} id="contact" className="relative bg-transparent text-gray-300 pt-12 pb-20 px-8 md:px-24">
      {/* Absolute Bottom Left Icons */}
      <div className="absolute bottom-8 left-8 md:bottom-16 md:left-24 flex flex-col gap-6 z-20">
        <a href="https://github.com/ahir-arpit" className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]">
          {/* Github Icon */}
          <svg className="w-8 h-8 md:w-10 md:h-10 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/arpit-yadav21/" className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
          {/* LinkedIn Icon */}
          <svg className="w-8 h-8 md:w-10 md:h-10 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col relative z-10">

        <div className="flex flex-col md:flex-row w-full">
          {/* Left Spacer */}
          <div className="hidden md:block w-20 mr-16"></div>

          {/* Contact Info */}
          <div className="flex-1 pr-8" style={{ perspective: 1000 }}>
            <motion.h2
              initial={{ opacity: 0, rotateX: -90, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "bottom" }}
              className="text-6xl md:text-7xl lg:text-[5rem] mb-12 tracking-wide font-serif text-white leading-none"
            >
              CONTACT
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: 30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h4 className="text-sm text-gray-500 mb-3 font-medium">Email</h4>
              <a href="mailto:arpityadav454406@gmail.com" className="text-gray-300 hover:text-blue-400 text-sm tracking-wide transition-colors duration-300">
                arpityadav454406@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: 30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h4 className="text-sm text-gray-500 mb-4 font-medium">Education</h4>
              <p className="text-gray-300 text-sm tracking-wide mb-4">B.Tech in Computer Science and Engineering</p>
              <p className="text-gray-300 text-sm tracking-wide mb-4">Internet Of Things (IoT)</p>

            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex-1 mt-12 md:mt-0 pt-28">
            <h4 className="text-sm text-gray-500 mb-4 font-medium">Social</h4>
            <div className="w-full max-w-[200px]">
              <a href="#" className="group flex items-center justify-between text-gray-300 hover:text-orange-400 text-2xl border-b border-gray-600 pb-2 mb-4 transition-colors duration-300">
                <span className="font-serif">Github</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="group flex items-center justify-between text-gray-300 hover:text-blue-400 text-2xl border-b border-gray-600 pb-2 mb-4 transition-colors duration-300">
                <span className="font-serif">Linkedin</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H9M17 7v8" /></svg>
              </a>
            </div>
          </div>

          {/* Right Info */}
          <div className="mt-16 md:mt-0 flex flex-col justify-between items-end pt-28">
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400 text-xl font-serif">Arpit Yadav</h4>

            <div className="flex items-center gap-2 text-gray-400 mt-8 mb-8">
              <span className="border border-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">C</span>
              <span className="text-sm">2026</span>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="mt-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-[0.2em] text-white uppercase overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] cursor-pointer">
              <span className="font-medium">Resume</span>
              <svg className="w-5 h-5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </button>
          </div>

        </div>
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
