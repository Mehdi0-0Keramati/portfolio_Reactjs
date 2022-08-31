import "./style.css";
import project_img2 from "../../../assets/img/project-img1.png";
import project_img1 from "../../../assets/img/project-img2.png";
import project_img3 from "../../../assets/img/project-img3.png";
import project_img4 from "../../../assets/img/project-img4.jpg";
import project_img5 from "../../../assets/img/project-img5.jpg";
import { useState } from "react";
import ApiContext from "../../../context/Context";
import { useContext } from "react";

const Projects = () => {
  const [toggleActive, setToggleActive] = useState(1);
  const [items, setItems] = useState([
    project_img1,
    project_img2,
    project_img2,
    project_img3,
    project_img4,
    project_img5,
  ]);

  function getItems(index) {
    setToggleActive(index);
    if (index === 1) {
      setItems([
        project_img1,
        project_img2,
        project_img2,
        project_img3,
        project_img4,
        project_img5,
      ]);
    } else if (index === 2) {
      setItems([project_img1, project_img1, project_img1, project_img1]);
    } else if (index === 3) {
      setItems([]);
    }
  }

  const context = useContext(ApiContext);
  return (
    <>
      <section className="projects text-center mt-5" id="projects">
        <h1 className="projectsTitle" style={{ fontFamily: "central_bold" }}>{context.t("navItem3")}</h1>
        <p className="w-50 mx-auto text-muted">{context.t("projectsText")}</p>
        <div className="p-3 w-75 mx-auto my-5 row">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => getItems(1)}
            className={
              toggleActive === 1 ? "items items_active col-4" : "items col-4"
            }
          >
            {context.t("tab1")}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => getItems(2)}
            className={
              toggleActive === 2 ? "items items_active col-4" : "items col-4"
            }
          >
            {context.t("tab2")}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => getItems(3)}
            className={
              toggleActive === 3 ? "items items_active col-4" : "items col-4"
            }
          >
            {context.t("tab3")}
          </div>
        </div>

        <div
          className="p-5 row row-cols-1 row-cols-sm-2  row-cols-md-3 g-5"
        >
          {items.map((item, i) => {
            return (
              <div key={i} className="item-list ">
                <div className="rounded-4 position-relative overflow-hidden">
                  <img src={item} alt="" />
                  <a
                    href="#"
                    className="text-decoration-none text-white overlay"
                  >
                    <h1>{context.t("projectTitle")}</h1>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Projects;
