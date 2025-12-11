import "./App.css";
import Header from "./components/Header";
import Add from "./components/Add";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Wathched";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./components/Context/GlobalContext";
function App() {
  return (
    <>
      <Router>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/Wathched" element={<Watched />} />
            <Route path="/Add" element={<Add />} />
          </Routes>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
