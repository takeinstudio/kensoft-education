import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Users, HeadphonesIcon, BookOpen, BarChart3, DollarSign, Send, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import franchiseHero from "@/assets/franchise-hero.jpg";

const benefits = [
  { icon: DollarSign, title: "Low Investment", desc: "Start your franchise with minimal capital investment and maximum ROI." },
  { icon: TrendingUp, title: "High Revenue", desc: "Proven business model with attractive revenue sharing structure." },
  { icon: HeadphonesIcon, title: "Complete Support", desc: "End-to-end support including setup, marketing, and operations." },
  { icon: Users, title: "Faculty Training", desc: "We train your faculty to deliver courses at Kensoft quality standards." },
  { icon: BarChart3, title: "Marketing Support", desc: "National-level branding, digital marketing, and lead generation." },
  { icon: BookOpen, title: "Curriculum Provided", desc: "Updated course material and examination system included." },
];

const faqs = [
  { q: "What is the investment required?", a: "The franchise investment starts from ₹2-5 lakhs depending on the city tier and center size." },
  { q: "What support does Kensoft provide?", a: "We provide complete support including faculty training, curriculum, marketing materials, IT infrastructure guidance, and ongoing operational support." },
  { q: "How long does it take to set up?", a: "A typical franchise center can be operational within 30-45 days of agreement signing." },
  { q: "What is the revenue model?", a: "Revenue is generated through course fees, certifications, and placement services. Average ROI is achieved within 8-12 months." },
];

const Franchise = () => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={franchiseHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
        <div className="relative z-10 container-max px-4 sm:px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <span className="section-label text-primary-foreground/80">Franchise Opportunity</span>
            <h1 className="heading-xl text-primary-foreground mb-4">
              Start Your Own <span className="text-primary">Kensoft Education</span> Franchise
            </h1>
            <p className="text-primary-foreground/70 mb-8">Join India's fastest-growing education franchise network. Low investment, high returns, complete support.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#franchise-form" className="btn-primary flex items-center gap-2">Apply For Franchise <ArrowRight size={16} /></a>
              <button className="btn-outline border-primary-foreground/30 text-primary-foreground hover:border-primary hover:text-primary">Download Brochure</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="bg-card rounded-3xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <AnimatedCounter end={150} label="Active Centers" />
            <AnimatedCounter end={20} label="States Covered" />
            <AnimatedCounter end={94} suffix="%" label="Partner Satisfaction" />
            <AnimatedCounter end={12} label="Months Avg ROI" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding section-muted">
        <div className="container-max">
          <SectionHeading label="Benefits" title="Why Partner With Kensoft?" description="A proven education franchise model with comprehensive support at every step." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card-premium overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 text-left flex items-center justify-between">
                  <span className="font-heading font-semibold text-sm text-foreground">{faq.q}</span>
                  <span className={`text-primary transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="franchise-form" className="section-padding section-muted">
        <div className="container-max max-w-2xl">
          <SectionHeading label="Get Started" title="Apply For Franchise" description="Fill in the form below and our team will reach out to you within 24 hours." />
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-premium p-12 text-center">
              <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
              <h3 className="heading-md text-foreground">Application Submitted!</h3>
              <p className="text-body mt-2">Our franchise team will contact you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="card-premium p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                <input required placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
              </div>
              <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="City" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                <input required placeholder="State" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
              </div>
              <input placeholder="Investment Budget (₹)" className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
              <textarea placeholder="Tell us about yourself" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none" />
              <div className="flex gap-3 pt-2">
                <button type="submit" className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <Send size={16} /> Submit Application
                </button>
                <a href="https://wa.me/919238945751?text=Hi, I'm interested in Kensoft franchise opportunity" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-green-600">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Franchise;
