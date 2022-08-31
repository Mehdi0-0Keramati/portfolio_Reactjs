import "./style.css";
import header_img from "../../../assets/img/header-img.svg";
import { Link } from "react-router-dom";
import { useTypewriter, Typewriter, Cursor } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import { FaArrowCircleRight } from "react-icons/fa";

import ApiContext from "../../../context/Context";
import { useContext } from "react";

const Header = () => {
  const context = useContext(ApiContext);
  const { text } = useTypewriter({
    words: [context.t("skills1"), context.t("skills2"), context.t("skills3")],
    loop: 0,
    typeSpeed: 200,
    delaySpeed: 2000,
    deleteSpeed: 150,
  });

  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div
          className="row row-cols-1 row-cols-lg-2"
          style={{ marginTop: "7rem" }}
        >
          <div className="content_header text-start col order-2 order-lg-1 pb-5 mt-5">
            <span
              className="text-white  p-2 rounded-0 border"
              style={{
                background: "linear-gradient(to right,#6C31A6,royalblue)",
              }}
            >
              {context.t("welcome")}
            </span>
            <h1 className="wrapper text-anime mt-3 ">
              {context.t("im")}
              <span className="titleSkills">{text}</span>
              <Cursor />
            </h1>
            <p>{context.t("headerText")}</p>
            <Link className="link-connect text-decoration-none" to={"/Contact"}>
              {context.t("contact")} <FaArrowCircleRight />
            </Link>
          </div>

          <div className="col order-1 ">
            <img className="pic_header" src={header_img} alt="header-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
