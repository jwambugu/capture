import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieState } from "../moviesState";
import styled from "styled-components";

const MovieDetails = () => {
  const { location } = useHistory();
  const { pathname } = location;

  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === pathname);

    setMovie(currentMovie[0]);
  }, [movies, pathname]);

  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </HeadLine>

          <Awards>
            {movie.awards.map((award) => (
              <Award award={award} key={award.title} />
            ))}
          </Awards>

          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }

  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ award }) => {
  return (
    <AwardStyle>
      <h3>{award.title}</h3>
      <div className="line" />
      <p>{award.description}</p>
    </AwardStyle>
  );
};

export default MovieDetails;
