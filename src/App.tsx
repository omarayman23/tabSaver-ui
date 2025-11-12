import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { HowToUse } from "./components/HowToUse";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-use" element={<HowToUse />} />
      </Routes>
    </BrowserRouter>
  );
}
