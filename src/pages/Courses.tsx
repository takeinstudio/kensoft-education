import CoursesSection from "@/components/sections/CoursesSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/SectionHeading";

const Courses = () => (
  <>
    <section className="section-padding section-muted">
      <div className="container-max">
        <SectionHeading
          label="Course Catalog"
          title="Explore Our Programs"
          description="From foundational computer skills to advanced programming — find the course that matches your career ambitions."
        />
      </div>
    </section>
    <CoursesSection />
    <CTASection />
  </>
);

export default Courses;
