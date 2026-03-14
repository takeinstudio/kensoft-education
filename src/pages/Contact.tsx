import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-max">
          <SectionHeading label="Contact Us" title="Get In Touch" description="Have questions? We'd love to hear from you. Reach out through any of the channels below." />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: MapPin, title: "Head Office", lines: ["Plot No 383, Behind Sani Temple", "Vanivihar, Bhubaneswar"] },
              { icon: Phone, title: "Phone", lines: ["9238945751", "9040033305"] },
              { icon: Mail, title: "Email", lines: ["kensofteducation@gmail.com"] },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-premium p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-sm text-muted-foreground">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden h-[400px]" style={{ boxShadow: "var(--shadow-card)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.098!2d85.824!3d20.296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ1LjYiTiA4NcKwNDknMjYuNCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Kensoft Education Location"
              />
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card-premium p-12 flex flex-col items-center justify-center text-center">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="heading-md text-foreground">Message Sent!</h3>
                <p className="text-body mt-2">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium p-8 space-y-4">
                <h3 className="heading-md text-foreground mb-2">Send us a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                  <input required placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                </div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                <input placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                <textarea required placeholder="Your message..." rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none" />
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
