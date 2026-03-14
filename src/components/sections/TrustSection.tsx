import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Shield, Award, Rocket } from "lucide-react";

const badges = [
  { icon: Shield, title: "ISO 9001:2015", desc: "Quality Management Certified" },
  { icon: Rocket, title: "Startup India", desc: "Government Recognized Startup" },
  { icon: Award, title: "Student Excellence", desc: "8500+ Students Trained" },
];

const TrustSection = () => (
  <section className="section-padding section-muted">
    <div className="container-max">
      <SectionHeading
        label="Trust & Recognition"
        title="Nationally Recognized Excellence"
        description="Our certifications and recognitions speak for the quality of education we deliver."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {badges.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card-premium p-8 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <b.icon size={28} className="text-accent" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-1">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-card rounded-3xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-border" style={{ boxShadow: "var(--shadow-card)" }}>
        <AnimatedCounter end={150} label="Franchises" />
        <AnimatedCounter end={50000} label="Classes Completed" />
        <AnimatedCounter end={8500} label="Students Enrolled" />
        <AnimatedCounter end={300} label="Certified Teachers" />
      </div>
    </div>
  </section>
);

export default TrustSection;
