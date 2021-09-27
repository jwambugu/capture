// Assets
import home1 from "../assets/images/home-one.png";

import styled from "styled-components";

function AboutSection() {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <dHide>
                        <h2>true.</h2>
                    </dHide>
                </div>

                <p>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills.
                </p>

                <button>Contact Us</button>
            </Description>

            <Image>
                <img src={home1} alt="Camera man" />
            </Image>
        </About>
    );
}

// Styled Components
const About = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: #ffffff;
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection;
