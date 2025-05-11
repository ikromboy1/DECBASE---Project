import "./Home.css";
import HomeImg from "../assets/Home-img.png";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Home = () => {
  const [t, i18n] = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="Home">
        <div className="Home-wrapper">
          <div className="Home-text">
            <p>{t("Home-p1")}</p>
            <h1>{t("Home-h1")}</h1>
            <p>{t("Home-p2")}</p>
            <button className="Home-btn">{t("Home-btn")}</button>
          </div>
          <div className="Home-img">
            <img src={HomeImg} alt="" className="Home-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
