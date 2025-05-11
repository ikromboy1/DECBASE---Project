import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguagaDelector from "i18next-browser-languagedetector";

import Uz from "./locales/Uz/translation.json";
// import Ru from "./locales/Ru/translation.json";
import Ru from "./locales/Ru/translation.json"
import Eng from "./locales/Eng/translation.json";

i18n
  .use(LanguagaDelector)
  .use(initReactI18next)
  .init({
    resources: {
      Uz: { translation: Uz },
      Ru: { translation: Ru },
      Eng: { translation: Eng },
    },
    failbacking: "Eng",
  });

export default i18n;
