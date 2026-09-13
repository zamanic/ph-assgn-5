import { useState } from "react";
import LogoText from "../assets/logo-text.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  const handleLinkClick = (link: string) => {
    setMobileOpen(false);
    const id = link.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-slate-700 hover:text-pink-600 transition-colors p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>

          <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick("Home"); }} className="flex items-center gap-2 md:justify-start justify-center flex-1 md:flex-none">
            <img src={LogoText} alt="Dev Stack" className="h-10 md:h-12 w-auto object-contain" />
          </a>

          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, idx) => (
              <li key={link}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className={`text-sm font-medium transition-colors ${
                    idx === 0
                      ? "brand-gradient-text"
                      : "text-slate-600 hover:text-pink-600"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors px-3 py-2">
              Sign In
            </button>
            <button className="brand-gradient text-white text-sm font-semibold px-4 md:px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] transition-all">
              Sign Up
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100">
            <ul className="flex flex-col gap-1 pt-3">
              {navLinks.map((link, idx) => (
                <li key={link}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      idx === 0
                        ? "brand-gradient-text bg-gradient-to-r from-orange-50 via-pink-50 to-violet-50"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-4 pt-3">
              <button className="w-full text-sm font-semibold text-slate-700 hover:text-pink-600 py-2">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
