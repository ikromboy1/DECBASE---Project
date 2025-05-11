import "./Services.css";
import ServicesImg from "../assets/Services-img.png";  
import twonty from "../assets/Services-twonty.png";  

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Services = () => {
  const [t, i18n] = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="Services">
        <div className="Services-wrapper">
          <div className="Services-text">
            <img src={twonty} alt="" />
            <p>{t("Services-h1-1")} <br /> {t("Services-h1-2")} <br /> {t("Services-h1-3")}</p>
            <button className="Services-btn">{t("Services-btn")}</button>
          </div>
          <div className="Services-img">
            <img src={ServicesImg} alt="" className="Services-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
