import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

const Hatspage = () => {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hats" element={<Hatspage />} />
    </Routes>
  );
}

export default App;
