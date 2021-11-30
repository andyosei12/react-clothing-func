import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import Shop from "./pages/shop/Shop";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
