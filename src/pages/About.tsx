import { motion } from "framer-motion";
import { GraduationCap, Users, Target, Award, Globe, BookOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTASection from "@/components/sections/CTASection";

const About = () => (
  <>
    <section className="section-padding bg-background">
      <div className="container-max">
        <SectionHeading label="About Us" title="Empowering Futures Since 2010" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-body mb-4">
              Kensoft Education is an ISO 9001:2015 certified IT training institute headquartered in Bhubaneswar, Odisha. Since our inception in 2010, we have been committed to delivering industry-aligned education that transforms careers.
            </p>
            <p className="text-body mb-4">
              With over 150 franchise centers across India, 8,500+ trained students, and 300+ certified faculty members, Kensoft has established itself as a trusted name in professional IT education.
            </p>
            <p className="text-body">
              Our mission is to bridge the gap between academic learning and industry requirements through practical, hands-on training programs that prepare students for real-world challenges.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, title: "8500+", desc: "Students Trained" },
                { icon: Users, title: "300+", desc: "Expert Faculty" },
                { icon: Globe, title: "150+", desc: "Centers Nationwide" },
                { icon: Award, title: "ISO 9001", desc: "Certified Quality" },
              ].map((item, i) => (
                <div key={i} className="card-premium p-6 text-center">
                  <item.icon size={28} className="text-primary mx-auto mb-3" />
                  <h4 className="font-heading font-bold text-xl text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding section-muted">
      <div className="container-max">
        <SectionHeading label="Our Vision" title="Mission & Vision" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium p-8">
            <Target size={32} className="text-primary mb-4" />
            <h3 className="heading-md text-foreground mb-3">Our Mission</h3>
            <p className="text-body">To provide affordable, high-quality IT education that empowers individuals with practical skills needed to succeed in the global technology landscape.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card-premium p-8">
            <BookOpen size={32} className="text-accent mb-4" />
            <h3 className="heading-md text-foreground mb-3">Our Vision</h3>
            <p className="text-body">To become India's most trusted education network, making quality IT training accessible to every aspiring student regardless of their background.</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="bg-card rounded-3xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-border" style={{ boxShadow: "var(--shadow-card)" }}>
          <AnimatedCounter end={150} label="Franchise Centers" />
          <AnimatedCounter end={8500} label="Students" />
          <AnimatedCounter end={300} label="Teachers" />
          <AnimatedCounter end={50000} label="Classes" />
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default About;
