export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-10 px-8 md:px-24 flex justify-between items-center pointer-events-none">
      {/* Logo */}
      <a href="#" className="text-white font-serif text-3xl md:text-4xl font-bold pointer-events-auto" style={{ fontFamily: 'Times New Roman, serif'}}>
        AY
      </a>
      
      {/* Navigation Links */}
      <div className="flex gap-12 md:gap-24 text-white font-serif tracking-[0.15em] text-base md:text-lg pointer-events-auto" style={{ fontFamily: 'Times New Roman, serif'}}>
        <a href="#home" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-400 transition-colors duration-300">HOME</a>
        <a href="#about" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-400 transition-colors duration-300">ABOUT</a>
        <a href="#work" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-400 transition-colors duration-300">WORK</a>
        <a href="#contact" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-400 transition-colors duration-300">CONTACT</a>
      </div>
    </nav>
  );
}
