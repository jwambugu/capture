// Images
import athlete from "../assets/images/athlete-small.png";
import theRacer from "../assets/images/theracer-small.png";
import goodTimes from "../assets/images/goodtimes-small.png";

import styled from "styled-components";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>

        <div className="line" />

        <Link>
          <img src={athlete} alt="The athlete" />
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>

        <div className="line" />

        <Link>
          <img src={theRacer} alt="The racer" />
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>

        <div className="line" />

        <Link>
          <img src={goodTimes} alt="Good times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
    color: #ffffff;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

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
