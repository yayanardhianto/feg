import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="pr-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shrink-0">
                <span className="font-display text-lg font-bold text-primary-foreground">FEG</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold text-foreground leading-tight">Futuristic</span>
                <span className="font-display text-xs font-semibold text-primary uppercase tracking-widest leading-tight">Edu Global</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
              Sekolah Masa Depan Berbasis Adab, Ilmu & Artificial Intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6 uppercase text-sm tracking-wide">Eksplorasi</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              {[
                { label: "Tentang IFS", path: "/about" },
                { label: "Program Akademik", path: "/programs" },
                { label: "Admissions", path: "/admissions" },
                { label: "Partner School", path: "/partner" },
                { label: "Career", path: "/career" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-primary hover:pl-2 transition-all block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6 uppercase text-sm tracking-wide">Informasi</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              {[
                { label: "Blog", path: "/blog" },
                { label: "Event", path: "/event" },
                { label: "Sistem Pembelajaran", path: "/learning-system" },
                { label: "Privacy Policy", path: "#" },
                { label: "Terms of Services", path: "#" },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="hover:text-primary hover:pl-2 transition-all block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6 uppercase text-sm tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={16} />
                </div>
                <a href="https://wa.me/6281234567890" className="hover:text-primary transition-colors">+62 812-3456-7890</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={16} />
                </div>
                <a href="mailto:info@ifs.sch.id" className="hover:text-primary transition-colors">info@ifs.sch.id</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4 font-medium">
          <p>© {new Date().getFullYear()} International Futuristic School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;