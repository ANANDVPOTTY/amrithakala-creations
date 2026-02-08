import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
} from "./Navbar.styles";
import logo from "../../assets/images/logo.png";

const menuItems = [
  { label: "About Us", path: "/about-us" },
  { label: "Bookings", path: "/bookings" },
  { label: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
            {item.label}
          </MenuItem>
        ))}
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
              {item.label}
            </MobileMenuItem>
          ))}
        </MobileMenuList>
      </MobileDrawer>
    </NavbarContainer>
  );
};

export default Navbar;
