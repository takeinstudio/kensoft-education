import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-[linear-gradient(120deg,#0b1224_0%,#2a101e_42%,#1f1f1f_100%)] text-primary-foreground text-xs py-2 hidden md:block">
    <div className="container-max px-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a href="tel:+919238945751" className="group flex items-center gap-1.5 hover:text-primary transition-colors duration-300">
          <Phone size={12} /> +91 9238945751
          <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-8" />
        </a>
        <a href="tel:+919040033305" className="group flex items-center gap-1.5 hover:text-primary transition-colors duration-300">
          <Phone size={12} /> +91 9040033305
          <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-8" />
        </a>
      </div>
      <a href="mailto:kensofteducation@gmail.com" className="group flex items-center gap-1.5 hover:text-primary transition-colors duration-300">
        <Mail size={12} /> kensofteducation@gmail.com
        <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-8" />
      </a>
    </div>
  </div>
);

export default TopBar;
