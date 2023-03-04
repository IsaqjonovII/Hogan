import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import App__Routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Login from "./routes/Auth/Login";

function App() {
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  const changeLoginState = () => setIsLoginOpened(!isLoginOpened);

  isLoginOpened ? document.body.style = "overflow: hidden" : document.body.style = "overflow: auto;"

  return (
    <div className="app">
      <Navbar
        isLoginOpened={isLoginOpened}
        changeLoginState={changeLoginState}
      />
      <Routes>
        {App__Routes.map(({ link, component, id }) => (
          <Route key={id} path={link} element={component} />
        ))}
      </Routes>

      <Login
        changeLoginState={changeLoginState}
        isLoginOpened={isLoginOpened}
      />
      <Footer />
      <div className={isLoginOpened ? "fade fade--opened" : "fade"} />
    </div>
  );
}

export default App;
