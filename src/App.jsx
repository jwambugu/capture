// Global styles
import GlobalStyles from "./components/GlobalStyles";

// Import pages
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";

import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />

      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <AboutUs />
          </Route>

          <Route path="/our-work" exact>
            <OurWork />
          </Route>

          <Route path="/our-work/:id">
            <MovieDetails />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
