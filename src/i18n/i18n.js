import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ml from "./locales/ml.json";

const savedLang = localStorage.getItem("ak-lang") || "ml";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ml: { translation: ml },
  },
  lng: savedLang,
  fallbackLng: "ml",
  interpolation: {
    escapeValue: false,
  },
});

// Sync font CSS variable on language change
const applyFontLang = (lang) => {
  if (lang === "en") {
    document.documentElement.setAttribute("data-lang", "en");
  } else {
    document.documentElement.removeAttribute("data-lang");
  }
  localStorage.setItem("ak-lang", lang);
};

applyFontLang(savedLang);
i18n.on("languageChanged", applyFontLang);

export default i18n;
