import clock from "../assets/images/clock.svg";
import diaphragm from "../assets/images/diaphragm.svg";
import money from "../assets/images/money.svg";
import teamwork from "../assets/images/teamwork.svg";
import homeTwo from "../assets/images/home-two.png";

function ServicesSection() {
    return (
        <div className="services">
            <div className="description">
                <h2>
                    High <span>quality</span> services.
                </h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm icon" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <img src={homeTwo} alt="camera" />
            </div>
        </div>
    );
}

export default ServicesSection;
