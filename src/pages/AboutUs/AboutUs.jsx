import { useTranslation } from "react-i18next";
import { AboutUsContainer, AboutUsTitle } from "./AboutUs.styles";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <AboutUsContainer>
      <AboutUsTitle>{t("aboutUs.title")}</AboutUsTitle>
    </AboutUsContainer>
  );
};

export default AboutUs;
