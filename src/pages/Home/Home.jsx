import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./Home.styles";
import homeBgImage from "../../assets/images/homeBgImage.png";
import mobileBgImage from "../../assets/images/mobile-bg.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <HeroSection bgImage={homeBgImage} mobileBgImage={mobileBgImage}>
      <HeroContent>
        <HeroTitle>{t("home.title")}</HeroTitle>
        <HeroDescription>{t("home.description")}</HeroDescription>

        <HeroButtonGroup>
          <PrimaryButton component={Link} to="/bookings">
            {t("home.bookNow")}
          </PrimaryButton>

          <SecondaryButton component={Link} to="/about-us">
            {t("home.aboutUs")}
          </SecondaryButton>
        </HeroButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
