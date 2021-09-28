import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MovieState } from "../moviesState";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

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
      {movies &&
        movies.map((movie) => (
          <Movie key={movie.url}>
            <h2>{movie.title}</h2>

            <div className="line" />

            <Link to={movie.url}>
              <img src={movie.mainImg} alt={movie.title} />
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
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
