import { useTranslation } from "react-i18next";
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from "./Home.styles";
import homeBgImage from "../../assets/images/homeBgImage.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <HeroSection sx={{ backgroundImage: `url(${homeBgImage})` }}>
      <HeroContent>
        <HeroTitle>{t("home.title")}</HeroTitle>
        <HeroSubtitle>{t("home.subtitle")}</HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
