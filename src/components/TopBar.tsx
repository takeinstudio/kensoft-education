import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-foreground text-primary-foreground text-xs py-2 hidden md:block">
    <div className="container-max px-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a href="tel:9238945751" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone size={12} /> 9238945751
        </a>
        <a href="tel:9040033305" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone size={12} /> 9040033305
        </a>
      </div>
      <a href="mailto:kensofteducation@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
        <Mail size={12} /> kensofteducation@gmail.com
      </a>
    </div>
  </div>
);

export default TopBar;
