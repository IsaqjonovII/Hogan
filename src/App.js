import { Routes, Route } from "react-router-dom";
import App__Routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {App__Routes.map(({ link, component, id }) => (
          <Route key={id} path={link} element={component} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
