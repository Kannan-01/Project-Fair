import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./Components/Auth";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
