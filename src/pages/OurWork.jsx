// Images
import styled from "styled-components"
import {Link} from "react-router-dom"
import {useState} from "react"
import {MovieState} from "../moviesState"

const OurWork = () => {
    const [movies] = useState(MovieState)

    return (
        <Work>
            {movies &&
            movies.map((movie) => (
                <Movie key={movie.url}>
                    <h2>{movie.title}</h2>

                    <div className="line"/>

                    <Link to={movie.url}>
                        <img src={movie.mainImg} alt={movie.title}/>
                    </Link>
                </Movie>
            ))}
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2 {
        padding: 1rem 0;
        color: #ffffff;
    }
`

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
`

export default OurWork;
