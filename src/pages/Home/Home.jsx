import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from "./Home.styles";
import homeBgImage from "../../assets/images/homeBgImage.png";

const Home = () => {
  return (
    <HeroSection sx={{ backgroundImage: `url(${homeBgImage})` }}>
      <HeroContent>
        <HeroTitle>AK Creations</HeroTitle>
        <HeroSubtitle>Where Art Meets Elegance</HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
