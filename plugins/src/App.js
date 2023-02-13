import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ui from "./pages/Ui";
import Slide from "./pages/Slide";
import ResponsiveAppBar from "./pages/Nav";
import Animate from "./pages/Animate";
import Chart from "./pages/Chart";
import { motion, AnimatePresence } from "framer-motion"

function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar></ResponsiveAppBar>
    <main>
      <AnimatePresence>
      <Routes>
        <Route path="/Ui" element={<Ui></Ui>}></Route>
        <Route path="/Slide" element={<Slide></Slide>}></Route>
        <Route path="/Animate" element={<Animate></Animate>}></Route>
        <Route path="/Chart" element={<Chart></Chart>}></Route>
      </Routes>
      </AnimatePresence>
    </main>
    </BrowserRouter>
  );
}

export default App;
