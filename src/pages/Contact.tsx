import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import PageBreadcrumbHero from "@/components/PageBreadcrumbHero";

const infoCards = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["Plot No 383, Behind Sani Temple", "Vanivihar, Bhubaneswar"],
    href: "https://maps.google.com/?q=Vanivihar+Bhubaneswar",
    color: "from-rose-500/20 to-rose-700/10",
    glow: "rgba(226,29,47,0.18)",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 9238945751", "+91 9040033305"],
    href: "tel:+919238945751",
    color: "from-violet-500/20 to-violet-700/10",
    glow: "rgba(139,92,246,0.18)",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["kensofteducation@gmail.com"],
    href: "mailto:kensofteducation@gmail.com",
    color: "from-sky-500/20 to-sky-700/10",
    glow: "rgba(14,165,233,0.18)",
  },
];

const inputCls =
  "w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <PageBreadcrumbHero
        label="Contact Us"
        title="Contact"
        description="Get in touch with our team for course guidance, franchise support, and admission assistance."
      />

      {/* ── Info Cards ────────────────────────────────────────────── */}
      <section className="relative bg-background overflow-hidden pt-16 pb-0">
        {/* soft background blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary/5 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 w-[340px] h-[340px] rounded-full bg-violet-400/5 blur-[70px]" />

        <div className="container-max px-4">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              <MessageSquare size={13} /> Get In Touch
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
              We're Here to Help
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Have questions? We'd love to hear from you. Reach out through any of the channels below.
            </p>
          </motion.div>

          {/* 3 info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {infoCards.map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                target={card.icon === MapPin ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-white overflow-hidden cursor-pointer"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                {/* radial glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 30%, ${card.glow}, transparent 70%)` }}
                />
                {/* top accent line */}
                <span className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} border border-white/60 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-base mb-2">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                ))}
                <span className="mt-4 flex items-center gap-1 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Reach us <ArrowRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + Form ────────────────────────────────────────────── */}
      <section className="relative bg-[linear-gradient(160deg,#f8f9fc_0%,#f1f2f7_100%)] overflow-hidden py-16">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_15%_50%,rgba(226,29,47,0.04),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.04),transparent_40%)]" />

        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden min-h-[420px] border border-border/60"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}
            >
              {/* top label strip */}
              <div className="absolute top-0 inset-x-0 z-10 flex items-center gap-2 px-5 py-3 bg-[linear-gradient(120deg,#0b1224,#3a0e23)] text-white text-sm font-medium">
                <MapPin size={14} className="text-primary" />
                Plot No 383, Vanivihar, Bhubaneswar
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.098!2d85.824!3d20.296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ1LjYiTiA4NcKwNDknMjYuNCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, marginTop: "44px", height: "calc(100% - 44px)", minHeight: "375px" }}
                allowFullScreen
                loading="lazy"
                title="Kensoft Education Location"
              />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-border/60 bg-white overflow-hidden"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
            >
              {/* top bar */}
              <div className="h-1 w-full bg-[linear-gradient(90deg,rgba(226,29,47,0.0),rgba(226,29,47,1),rgba(226,29,47,0.0))]" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full min-h-[420px] p-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-6"
                    >
                      <CheckCircle size={40} className="text-green-500" />
                    </motion.div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 space-y-4"
                  >
                    <div className="mb-6">
                      <h3 className="font-heading text-2xl font-bold text-foreground">Send us a Message</h3>
                      <p className="text-sm text-muted-foreground mt-1">We typically respond within a few hours.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">Full Name</label>
                        <input required placeholder="John Doe" className={inputCls} />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">Phone</label>
                        <input required placeholder="+91 9XXXXXXXXX" className={inputCls} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">Email</label>
                      <input type="email" placeholder="you@example.com" className={inputCls} />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">Subject</label>
                      <input placeholder="Course enquiry / Franchise / Other" className={inputCls} />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">Message</label>
                      <textarea
                        required
                        placeholder="Tell us how we can help you…"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(226,29,47,0.35)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-13 py-3.5 rounded-xl bg-[linear-gradient(135deg,#e21d2f,#b01020)] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Send size={15} /> Send Message
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
