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

// Apply font CSS variable for the given language
const setFontLang = (lang) => {
  if (lang === "en") {
    document.documentElement.setAttribute("data-lang", "en");
  } else {
    document.documentElement.removeAttribute("data-lang");
  }
  localStorage.setItem("ak-lang", lang);
  document.title = i18n.t("pageTitle");
};

// Animate the switch with a fade transition
const applyFontLangWithAnimation = (lang) => {
  const root = document.getElementById("root");
  if (root) {
    root.classList.add("lang-switching");
    root.addEventListener(
      "animationend",
      () => root.classList.remove("lang-switching"),
      { once: true }
    );
  }
  setFontLang(lang);
};

setFontLang(savedLang);
i18n.on("languageChanged", applyFontLangWithAnimation);

export default i18n;
