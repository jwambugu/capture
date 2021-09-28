// Assets
import homeOne from "../assets/images/home-one.png";

// Styled Components
import { About, Description, Hide, Image } from "../styles";

// Animations
import { motion } from "framer-motion";
import { fade, photoAnimation, titleAnimation } from "../animations";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div variants={titleAnimation} className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>

        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      <Image>
        <motion.img
          variants={photoAnimation}
          src={homeOne}
          alt="guy with a camera"
        />
      </Image>
    </About>
  );
};

export default AboutSection;
