import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-max section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Kensoft Education" className="h-12 w-auto mb-4 brightness-200" />
          <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
            ISO 9001 Certified institute delivering industry-focused IT training and certification programs since 2010.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Courses", path: "/courses" },
              { label: "Franchise", path: "/franchise" },
              { label: "Verify Certificate", path: "/verify" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider">Courses</h4>
          <div className="flex flex-col gap-2.5">
            {["PGDCA", "Tally Prime", "MS Office", "DCA", "Web Design", "Java", "Python", "C / C++"].map((c) => (
              <Link key={c} to="/courses" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                {c}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <span className="text-sm text-primary-foreground/70">
                Plot No 383, Behind Sani Temple, Vanivihar, Bhubaneswar
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-primary" />
              <div className="text-sm text-primary-foreground/70">
                <a href="tel:9238945751" className="hover:text-primary transition-colors">9238945751</a>
                <br />
                <a href="tel:9040033305" className="hover:text-primary transition-colors">9040033305</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-primary" />
              <a href="mailto:kensofteducation@gmail.com" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                kensofteducation@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-6">
      <div className="container-max px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Kensoft Education. All rights reserved.
        </p>
        <p className="text-xs text-primary-foreground/50">ISO 9001 Certified | Startup India Recognized</p>
      </div>
    </div>
  </footer>
);

export default Footer;
