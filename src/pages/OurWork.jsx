import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MovieState } from "../moviesState";

// Animations
import { motion } from "framer-motion";
import {
  fade,
  lineAnimation,
  pageAnimation,
  photoAnimation,
  slider,
  sliderContainer,
} from "../animations";

const OurWork = () => {
  const [movies] = useState(MovieState);

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#ffffff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>

      {movies &&
        movies.map((movie) => (
          <Movie key={movie.url}>
            <motion.h2 variants={fade}>{movie.title}</motion.h2>

            <motion.div variants={lineAnimation} className="line" />

            <Link to={movie.url}>
              <Hide>
                <motion.img
                  variants={photoAnimation}
                  src={movie.mainImg}
                  alt={movie.title}
                />
              </Hide>
            </Link>
          </Movie>
        ))}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 3rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// Frame Animations
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
