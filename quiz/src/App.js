import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
    </BrowserRouter>
  );
}

export default App;