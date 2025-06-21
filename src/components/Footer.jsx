import "./Footer.css";
import { useTranslation } from "react-i18next";

import Logo from "../assets/Logo.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import In from "../assets/in.png";
// import Name from "../assets/Name.png"
import UserLogo from "../assets/IkromboyLogo.png"

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slice/themeslice";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className={`Footer app ${theme}`}>
        <div className="Footer-wrap">
          <div className="Footer-logo">
            <img src={Logo} alt="" />
            <p>{t("Footer-logo-p")}</p>
          </div>

          <div className="Footer-uls">
            <ul className="Footer-ul">
              <li>
                <p className="Footer-ul-p">{t("Footer-ul1-p")}</p>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link1")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link2")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link3")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link4")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link5")}</Link>
              </li>
            </ul>

            <ul className="Footer-ul">
              <li>
                <p className="Footer-ul-p">{t("Footer-ul2-p")}</p>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link1")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul2-link2")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul2-link3")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul2-link4")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul2-link5")}</Link>
              </li>
            </ul>

            <ul className="Footer-ul">
              <li>
                <p className="Footer-ul-p">{t("Footer-ul3-p")}</p>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link1")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link2")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link3")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link4")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("Footer-ul1-link5")}</Link>
              </li>
            </ul>

            <ul className="Footer-links">
              <p className="Footer-ul-p">{t("Footer-ul4-p")}</p>
              <div className="Footer-link-icons">
                <a href="https://www.facebook.com" target="_blank">
                  <img src={Facebook} alt="FaceBook" title="FaceBook" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <img src={Twitter} alt="Twitter" title="Twitter" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <img src={Instagram} alt="Instagram"title="Instagram" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <img src={In} alt="Linkedin" title="Linkedin" />
                </a>
                <a href="https://t.me/komiljanov_2009" target="_blank">
                  <img src={UserLogo} alt="Ikromboy Komiljanov of telegram logo." title="Komiljanov link" className="Name"/>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className="Footer-bottom">
          <h1>
            {t("Footer-bottom-text")}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
