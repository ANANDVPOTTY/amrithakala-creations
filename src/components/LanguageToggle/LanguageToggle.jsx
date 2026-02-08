import { useTranslation } from "react-i18next";
import {
  ToggleContainer,
  ToggleThumb,
  ToggleLabel,
} from "./LanguageToggle.styles";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const handleToggle = () => {
    i18n.changeLanguage(isEnglish ? "ml" : "en");
  };

  return (
    <ToggleContainer onClick={handleToggle}>
      <ToggleThumb checked={isEnglish} />

      <ToggleLabel checked={isEnglish} side="left">
        ML
      </ToggleLabel>

      <ToggleLabel checked={isEnglish} side="right">
        EN
      </ToggleLabel>
    </ToggleContainer>
  );
};

export default LanguageToggle;
