import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import ProgressBar from "react-progressbar-on-scroll";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/contact/contact";
import { useState } from "react";
import ApiContext from "./context/Context";
import { useTranslation } from "react-i18next";
import "./i18n";

const App = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ApiContext.Provider value={{ theme, toggleTheme, t, i18n }}>
        <div className="main-container" id={theme}>
          <HashRouter>
            <Navbar />
            <ProgressBar gradient={true} gradientColor="royalblue" />
            <Routes>
              <Route path=" " element={<Navigate to={"/"} />} />
              <Route path="home" element={<Navigate to={"/"} />} />
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </div>
      </ApiContext.Provider>
    </>
  );
};
export default App;
