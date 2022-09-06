import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./style.css";

import { useContext } from "react";
import ApiContext from "../../context/Context";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const context = useContext(ApiContext);

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    context.i18n.changeLanguage(languageValue);
    if (languageValue === "fa") {
      document.body.style.direction = "rtl";
      document.body.classList.add("rtlStyle");
    } else if (languageValue === "en") {
      document.body.style.direction = "ltr";
      document.body.classList.remove("rtlStyle");
    }
  };

  return (
    <>
      <div className={scrolled ? "fixed" : ""}>
        <nav style={{ zIndex: "10" }} className="navbar navbar-expand-lg px-5">
          <div className="container-fluid">
            <RouterLink to="/" className="fs-3 navbar-brand mx-3">
              LOGO
            </RouterLink>

            <button
              className="bg-light navbar-toggler mx-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto align-items-lg-center mb-2 mb-lg-0">
                {/* toggle Theme */}
                <div className="toggleTheme">
                  <input
                    type="checkbox"
                    id="toggleTheme"
                    checked={context.theme === "dark"}
                    onChange={context.toggleTheme}
                  />
                  <label htmlFor="toggleTheme"></label>
                </div>
                {/* toggle Theme */}

                <li className="nav-item">
                  <Link
                    className="nav_link me-4"
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={70}
                  >
                    {context.t("navItem1")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav_link me-4"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={70}
                  >
                    {context.t("navItem2")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav_link me-4"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={70}
                  >
                    {context.t("navItem3")}
                  </Link>
                </li>
                {/* toggle language */}
                <select
                  className="mx-lg-3 custom-select"
                  onChange={changeLanguageHandler}
                >
                  <option id="opt" value="en">English </option>
                  <option value="fa">Persian </option>
                </select>
                {/* toggle language */}
              </ul>

              <div
                style={{ paddingBottom: "5rem" }}
                className="d-flex align-items-center p-lg-0"
              >
                <a className="social_icon" href="#">
                  <FaLinkedinIn />
                </a>
                <a className="social_icon" href="https://github.com/Mehdi0-0Keramati">
                  <FaGithub />
                </a>
                <a
                  className="social_icon"
                  href="https://instagram.com/mehdi0_0keramati"
                >
                  <FaInstagram />
                </a>
                <RouterLink
                  to={"/Contact"}
                  className="btn_connect btn border mx-3 rounded-0"
                >
                  {context.t("contact")}
                </RouterLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
