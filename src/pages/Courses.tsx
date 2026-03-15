import CoursesSection from "@/components/sections/CoursesSection";
import CTASection from "@/components/sections/CTASection";
import PageBreadcrumbHero from "@/components/PageBreadcrumbHero";

const Courses = () => (
  <>
    <PageBreadcrumbHero
      label="Course Catalog"
      title="Courses"
      description="From foundational computer skills to advanced programming, find the course that matches your career ambitions."
    />
    <CoursesSection compactTop showAll />
    <CTASection />
  </>
);

export default Courses;
