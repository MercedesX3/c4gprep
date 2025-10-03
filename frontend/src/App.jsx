import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// pages
import LandingPage from "./pages/landingpage";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  // optional: if you want hover state, uncomment these:
  // const [hover, setHover] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
        {/* Header */}
        <div id="header" className="flex w-full flex-row">
          <div className="text-left pl-8 bg-primary-yellow flex-1 py-2 font-semibold text-font-light">
            WINDLE
          </div>

          <div className="bg-primary-blue flex-1 py-2 font-semibold text-font-light hover:bg-[#009EDF] transition delay-150 duration-200 ease-in-out hover:[transform:scale(1.1)]">
            EXPLORE
          </div>

          <button className="bg-secondary-yellow flex-1 py-2 font-semibold text-font-light hover:bg-primary-yellow transition delay-150 duration-200 ease-in-out hover:[transform:scale(1.1)]">
            <h1>ABOUT</h1>
          </button>

          <div
            className="bg-primary-blue flex-1 py-2 font-semibold hover:bg-[#009EDF] transition delay-150 duration-200 ease-in-out hover:[transform:scale(1.1)]"
            // onMouseEnter={() => setHover(4)}
            // onMouseLeave={() => setHover(null)}
          >
            <Link to="/signin" className="font-semibold text-font-light">
              LOGIN
            </Link>
          </div>

          <div className="text-right bg-primary-yellow flex-1 py-2 font-semibold hover:bg-[#E19D00] transition delay-150 duration-200 ease-in-out hover:[transform:scale(1.1)] pr-8">
            <Link to="/signup" className="font-semibold text-font-light">
              CREATE ACCOUNT
            </Link>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Optional: catch-all */}
            {/* <Route path="*" element={<LandingPage />} /> */}
          </Routes>
        </main>

        {/* Footer */}
        <footer id="footer" className="bg-primary-yellow gap-x-5 p-2.5 text-font-light space-y-5 pb-32">
          <h1 className="text-left font-semibold">WINDLE</h1>
          <div className="grid grid-cols-5 text-left">
            <div>
              <h1>Trial</h1>
              <h1>Trial</h1>
            </div>
            <h1>Trial</h1>
            <h1>Trial</h1>
            <h1>Trial</h1>
          </div>
        </footer>
    </div>
  );
}

export default App;
