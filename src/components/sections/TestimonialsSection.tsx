import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  { name: "Priya Sharma", course: "PGDCA", review: "Kensoft transformed my career. The placement support was incredible — I got placed within 2 months of completing my course.", rating: 5 },
  { name: "Rahul Patel", course: "Web Design", review: "The practical approach to learning at Kensoft is unmatched. I built real projects during the course that helped me land my first job.", rating: 5 },
  { name: "Sneha Mohanty", course: "Python", review: "Best Python training in Bhubaneswar. The faculty explains complex concepts in a very simple way. Highly recommended!", rating: 5 },
  { name: "Amit Das", course: "Java", review: "The Java course covered everything from basics to Spring Boot. The live project experience was the best part of the program.", rating: 4 },
  { name: "Ritu Singh", course: "Tally Prime", review: "I joined the Tally course after graduation and got placed in an accounting firm within weeks. Excellent faculty and curriculum.", rating: 5 },
  { name: "Vikram Jena", course: "DCA", review: "Kensoft's DCA program gave me a strong foundation in computers. The environment is very supportive and professional.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <SectionHeading
        label="Student Stories"
        title="What Our Students Say"
        description="Hear from thousands of successful graduates who transformed their careers with Kensoft Education."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="card-premium p-6 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className={j < t.rating ? "text-yellow-500 fill-yellow-500" : "text-border"}
                />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-6 flex-1">"{t.review}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.course}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
