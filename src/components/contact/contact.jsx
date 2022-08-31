import { useEffect, useRef } from "react";
import "./style.css";
import { useContext } from "react";
import Context from "../../context/Context"
const Contact = () => {
  const context = useContext(Context);

  const ref = useRef(null);
  useEffect(() => {
    ref?.current?.focus?.();
  }, [ref]);
  return (
    <>
      <div className="container">
        <form className="form text-center mx-auto rounded-5">
          <h1>{context.t("contactUs")}</h1>

          <div className="group mt-5 w-100 d-flex align-items-center justify-content-center">
            <div className="input_group p-relative flex">
              <input ref={ref} id="name" type="text" />
              <label htmlFor="name">{context.t("contactUsName")}</label>
            </div>

            <div className="input_group">
              <input id="email" type="email" required />
              <label htmlFor="email">{context.t("contactUsEmail")}</label>
            </div>
          </div>

          <div className="input_group" style={{ marginTop: "5rem" }}>
            <textarea id="textarea"></textarea>
            <label htmlFor="textarea">{context.t("contactUsTextArea")}</label>
          </div>

          <br />

          <button type="submit" className="send mb-4">

            {context.t("contactUsSend")}
          </button>

          <div className="text-info fs-3 social-media w-100 d-flex align-items-center justify-content-between">
            <div>
              <a href="https://instagram.com/mehdi0_0keramati#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="mx-3">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/Mehdi0-0Keramati">
                <i className="bi bi-github"></i>
              </a>
            </div>
            <h5>mehdi@gmail.com</h5>
          </div>
        </form>
        <div className="bubble"></div>
      </div>
    </>
  );
};

export default Contact;
