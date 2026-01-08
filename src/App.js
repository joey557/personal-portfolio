import "bootstrap/dist/css/bootstrap.min.css";

import BasicExample from "./components/NavBar.js";
import { Banner } from "./components/Banner.js";
import Projects from "./components/Projects";
import "./App.css";
function App() {
  return (
    <div>
      <BasicExample />
      <div className="page-scale">
        <Banner></Banner>
        <Projects />
      </div>
    </div>
  );
}

export default App;
