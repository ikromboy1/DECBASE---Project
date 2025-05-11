import "./Navbar.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slice/themeslice";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <>
      <div className={`Navbar app ${theme}`}>
        <Link to={"/"}>
          <img src={Logo} alt="" className="logo" />
        </Link>
        <div className="Nav-links">
          <ul className="Nav-ul">
            <Link to={"/"}>{t("home")}</Link>
            <Link to={"/project"}>{t("project")}</Link>
            <Link to={"/services"}>{t("services")}</Link>
            <Link to={"/about"}>{t("about")}</Link>
          </ul>
          <div className="Nav-languages">
            <button
              onClick={() => changeLanguage("Eng")}
              className="Nav-language-btn"
            >
              eng
            </button>

            <button
              onClick={() => changeLanguage("Uz")}
              className="Nav-language-btn"
            >
              O'z
            </button>

            <button
              onClick={() => changeLanguage("Ru")}
              className="Nav-language-btn"
            >
              Pyc
            </button>

            <button
              className="Nav-theme-btn"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
