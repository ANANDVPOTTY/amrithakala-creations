import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import {
  NavbarContainer,
  LogoImage,
  MenuList,
  MenuItem,
  HamburgerButton,
  DrawerCloseButton,
  MobileDrawer,
  MobileMenuList,
  MobileMenuItem,
  DrawerDivider,
  DrawerBottomSection,
} from "./Navbar.styles";
import logo from "../../assets/images/akTextLogo.png";
// import logo from "../../assets/images/logo.png";

const menuItems = [
  { labelKey: "nav.aboutUs", path: "/about-us" },
  { labelKey: "nav.bookings", path: "/bookings" },
  { labelKey: "nav.gallery", path: "/gallery" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleItemClick = (path) => {
    navigate(path);
  };

  const handleMobileItemClick = (path) => {
    navigate(path);
    toggleDrawer();
  };

  return (
    <NavbarContainer component="nav">
      <LogoImage
        title={t("nav.home")}
        src={logo}
        alt="AK Creations"
        onClick={() => navigate("/")}
      />

      <MenuList>
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            active={location.pathname === item.path}
            onClick={() => handleItemClick(item.path)}
          >
            {t(item.labelKey)}
          </MenuItem>
        ))}
        <LanguageToggle />
      </MenuList>

      <HamburgerButton onClick={toggleDrawer}>
        <MenuIcon />
      </HamburgerButton>

      <MobileDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <DrawerCloseButton onClick={toggleDrawer}>
          <CloseIcon />
        </DrawerCloseButton>

        <MobileMenuList>
          {menuItems.map((item) => (
            <MobileMenuItem
              key={item.path}
              active={location.pathname === item.path}
              onClick={() => handleMobileItemClick(item.path)}
            >
              {t(item.labelKey)}
            </MobileMenuItem>
          ))}
        </MobileMenuList>

        <DrawerBottomSection>
          <DrawerDivider />
          <LanguageToggle />
        </DrawerBottomSection>
      </MobileDrawer>
    </NavbarContainer>
  );
};

export default Navbar;
