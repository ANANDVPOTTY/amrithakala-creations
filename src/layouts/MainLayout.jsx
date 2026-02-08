import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { MainContainer, ContentWrapper } from "./MainLayout.styles";

const MainLayout = () => {
  return (
    <MainContainer>
      <Navbar />

      <ContentWrapper component="main">
        <Outlet />
      </ContentWrapper>

      <Footer />
    </MainContainer>
  );
};

export default MainLayout;
