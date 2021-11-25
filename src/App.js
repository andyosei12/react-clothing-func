import Homepage from "./pages/Homepage";
import Shop from "./pages/shop/Shop";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
