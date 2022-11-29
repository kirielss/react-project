import { createRoot } from "react-dom/client";
import Entry from "./Entry";
import PkmProvider from "./PkmProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gotcha from "./Gotcha";
import Home from "./Home/Home";

const App = () => {
  return (

    <PkmProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/Gotcha" element={<Gotcha />} />
          <Route path="/Home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </PkmProvider>

  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);