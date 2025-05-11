import "./Project.css";
import ProjectImg from "../assets/Project-img.png";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Project = () => {
  const [t, i18n] = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="Project">
        <div className="Project-wrapper">
          <div className="Project-img">
            <img src={ProjectImg} alt="" className="Project-img" />
          </div>
          <div className="Project-text">
            <p>{t("Project-p1")}</p>
            <h1>{t("Project-h1")} <br /> {t("Project-h1-resume")}</h1>
            <p>{t("Project-p2")}</p>
            <button className="Project-btn">{t("Project-btn")}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
