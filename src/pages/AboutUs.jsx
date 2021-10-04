import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import ScrollTop from "../components/ScrollTop";

function AboutUs() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection pageAnimation={pageAnimation} />
      <ServicesSection />
      <FaqSection />

      <ScrollTop />
    </motion.div>
  );
}

export default AboutUs;
