// Global stlyes
import GlobalStyles from "./components/GlobalStyles";

// Import pages
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Navbar />
            <AboutUs />
        </div>
    );
}

export default App;
