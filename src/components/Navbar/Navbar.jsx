import { useState } from "react";
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

const menuItems = ["About Us", " Bookings", "Gallery"];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleMobileItemClick = (item) => {
    setActiveItem(item);
    toggleDrawer();
  };

  return (
    <NavbarContainer component="nav">
      <LogoImage src={logo} alt="AK Creations" />

      <MenuList>
        {menuItems.map((item) => (
          <MenuItem
            key={item}
            active={activeItem === item}
            onClick={() => handleItemClick(item)}
          >
            {item}
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
              key={item}
              active={activeItem === item}
              onClick={() => handleMobileItemClick(item)}
            >
              {item}
            </MobileMenuItem>
          ))}
        </MobileMenuList>
      </MobileDrawer>
    </NavbarContainer>
  );
};

export default Navbar;
