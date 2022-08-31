import { CircularProgressbar } from "react-circular-progressbar";
import Carousel from "react-elastic-carousel";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";
import ApiContext from "../../../context/Context";
import { useContext } from "react";

const Skills = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 2, pagination: false },
    { width: 400, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 650, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const context = useContext(ApiContext);
  return (
    <section className="skills-container text-center">
      <div id="skills" className="skills ">
        <h1 className="skillsTitle" style={{ fontFamily: "central_bold" }}>
          {context.t("navItem2")}
        </h1>
        <p className="px-5 mb-5 text-muted">{context.t("skillsText")}</p>

        <Carousel
          breakPoints={breakPoints}
          itemPadding={[10, 60]}
          enableAutoPlay
          autoPlaySpeed={2000}
        >
          <div className="d-flex align-items-center justify-content-center flex-column">
            <CircularProgressbar className="py-4" value={40} text={`40%`} />
            <h5 style={{ width: "6rem" }}>HTML</h5>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <CircularProgressbar className="py-4" value={50} text={`50%`} />
            <h5 style={{ width: "6rem" }}>Css</h5>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <CircularProgressbar className="py-4" value={60} text={`60%`} />
            <h5 style={{ width: "6rem" }}>JavaScript</h5>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <CircularProgressbar className="py-4" value={70} text={`70%`} />
            <h5 style={{ width: "6rem" }}>react</h5>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <CircularProgressbar className="py-4" value={80} text={`80%`} />
            <h5 style={{ width: "6rem" }}>photoShop</h5>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default Skills;
