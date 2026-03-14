import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, Award, BookOpen, Monitor, Globe, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: GraduationCap, title: "Certified Curriculum", desc: "ISO 9001 certified courses aligned with industry standards." },
  { icon: Users, title: "Expert Faculty", desc: "1500+ certified trainers with real-world industry experience." },
  { icon: Briefcase, title: "Placement Assistance", desc: "Dedicated placement cell with 94% placement rate." },
  { icon: Monitor, title: "Live Projects", desc: "Hands-on experience with real-world projects and case studies." },
  { icon: Globe, title: "150+ Centers", desc: "Pan-India franchise network for accessible education." },
  { icon: Award, title: "Recognized Certificates", desc: "Government-recognized certificates with verification portal." },
  { icon: BookOpen, title: "Updated Syllabus", desc: "Curriculum updated quarterly to match industry trends." },
  { icon: Shield, title: "Startup India", desc: "Recognized by Startup India & Government of Odisha." },
];

const WhyChooseSection = () => (
  <section className="section-padding section-muted">
    <div className="container-max">
      <SectionHeading
        label="Why Kensoft"
        title="Why Choose Kensoft Education?"
        description="We don't just teach — we transform careers with industry-aligned training and real placement support."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-2xl p-6 transition-all duration-300 group"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <f.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
