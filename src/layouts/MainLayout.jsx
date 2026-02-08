import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { MainContainer, ContentWrapper } from "./MainLayout.styles";

const MainLayout = () => {
  return (
    <MainContainer>
      <Navbar />

      <ContentWrapper component="main">
        <Outlet />
      </ContentWrapper>
    </MainContainer>
  );
};

export default MainLayout;
