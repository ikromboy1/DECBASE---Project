import "./About.css";
import AboutImg from "../assets/About-img.png"
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="About">
      <h1>{t("About-text")} <br /> {t("About-text2")}</h1>
      <img src={AboutImg} alt="" />
    </div>
  );
};

export default About;
