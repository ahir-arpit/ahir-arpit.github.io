"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a]/90 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl scrollbar-hide"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-10 border-b border-white/10 pb-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Arpit Yadav</h2>
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400 font-medium">IoT & Backend Developer</p>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-3xl">
                I specialize in developing Internet of Things (IoT) and smart technology solutions, with a strong foundation in Python and backend web development. My work focuses on designing and implementing scalable, high-performance systems that efficiently handle real-time data and seamless connectivity.
              </p>
            </div>

            {/* Grid Layout for Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Left Column */}
              <div className="space-y-12">
                {/* Education */}
                <section>
                  <h3 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-6 font-serif">Education</h3>
                  <div className="relative pl-4 border-l border-white/10">
                    <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-2 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <h4 className="text-lg font-semibold text-gray-200">Raj Kumar Goel Institute of Technology</h4>
                    <p className="text-gray-400 mt-1">B.Tech in Computer Science Engineering (IoT)</p>
                    <p className="text-sm text-gray-500 mt-2">Expected 2027 • GPA: 7.34</p>
                  </div>
                </section>

                {/* Experience & Projects */}
                <section>
                  <h3 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-6 font-serif">Key Projects</h3>
                  <div className="space-y-6">
                    <div className="relative pl-4 border-l border-white/10">
                      <div className="absolute w-2 h-2 bg-orange-500 rounded-full -left-[4.5px] top-2 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                      <h4 className="text-lg font-semibold text-gray-200">LexAssist AI</h4>
                      <p className="text-sm text-gray-500 mt-2">Built AI-powered legal document analyzer using FastAPI backend, Streamlit UI, and an NLP pipeline (HuggingFace & spaCy) for summarization and NER.</p>
                    </div>
                    <div className="relative pl-4 border-l border-white/10">
                      <div className="absolute w-2 h-2 bg-purple-500 rounded-full -left-[4.5px] top-2 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                      <h4 className="text-lg font-semibold text-gray-200">E-Learning Platform</h4>
                      <p className="text-sm text-gray-500 mt-2">Developed a full-stack MERN platform with secure JWT authentication, course management, live video conferencing, and real-time messaging.</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Skills */}
                <section>
                  <h3 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-6 font-serif">Technical Skills</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Programming & Backend</p>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'C', 'Dart', 'FastAPI', 'REST APIs', 'MySQL', 'MongoDB'].map((skill, i) => (
                          <span key={`p-${i}`} className="px-3 py-1 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">AI & IoT</p>
                      <div className="flex flex-wrap gap-2">
                        {['Generative AI', 'LLMs', 'NLP', 'OpenAI APIs', 'Node MCU', 'ESP32', 'Arduino'].map((skill, i) => (
                          <span key={`a-${i}`} className="px-3 py-1 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Links */}
                <section>
                  <h3 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-6 font-serif">Connect</h3>
                  <div className="space-y-4">
                    <a href="mailto:daddymukambo@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                      <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span className="text-sm">daddymukambo@gmail.com</span>
                    </a>
                    <a href="tel:+918954296624" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                      <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <span className="text-sm">+91 8954296624</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="/Arpit-yadav.resume (1).pdf"
                download="Arpit_Yadav_Resume.pdf"
                className="px-8 py-3 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 font-medium tracking-wide flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download PDF
              </a>
              <button 
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-medium tracking-wide"
              >
                Close
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
