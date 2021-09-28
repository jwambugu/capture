import React from "react";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

function ContactUs() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#ffffff" }}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
}

export default ContactUs;
