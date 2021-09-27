// Global stlyes
import GlobalStyles from "./components/GlobalStyles";

// Import pages
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <AboutUs />
                </Route>

                <Route path="/our-work">
                    <OurWork />
                </Route>

                <Route path="/contact-us">
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
