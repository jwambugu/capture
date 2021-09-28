// Global styles
import GlobalStyles from "./components/GlobalStyles";

// Import pages
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Navbar />

      <Switch>
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
    </div>
  );
}

export default App;
