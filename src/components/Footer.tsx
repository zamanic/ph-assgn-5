import LogoText from "../assets/logo-text.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const productLinks = ["Home", "Technologies", "Projects"];
  const companyLinks = ["About", "Contact", "Careers"];
  const legalLinks = ["Privacy Policy", "Terms of Service"];

  return (
    <footer id="contact" className="mt-24 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          <div className="lg:col-span-2">
            <img src={LogoText} alt="Dev Stack" className="h-10 w-auto object-contain mb-4" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-5">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-pink-600 hover:bg-pink-50 flex items-center justify-center transition-colors">
                <FaGithub size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-pink-600 hover:bg-pink-50 flex items-center justify-center transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-pink-600 hover:bg-pink-50 flex items-center justify-center transition-colors">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Product</h4>
            <ul className="space-y-2.5">
              {productLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-slate-600 hover:text-pink-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-slate-600 hover:text-pink-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-600 hover:text-pink-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-400">
            &copy; 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-slate-400 hover:text-pink-600 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-pink-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
