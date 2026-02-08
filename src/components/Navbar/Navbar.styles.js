import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";
import { responsivePagePadding } from "../../theme/commonStyles";

/*-------| GRADIENT |-------*/
const navbarGradient =
  "linear-gradient(90deg, var(--color-primary-dark) 0%, var(--color-primary) 30%, var(--color-primary) 70%, var(--color-primary-dark) 100%)";

/*-------| Drawer |-------*/

export const NavbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "14px",
  paddingBottom: "14px",
  ...responsivePagePadding(theme),
  background: navbarGradient,
  boxShadow: "0 4px 20px rgba(40, 9, 5, 0.3)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1100,
}));

export const LogoImage = styled("img")(({ theme }) => ({
  height: "70px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    height: "56px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "46px",
  },
}));

/*-------| Desktop Menu |-------*/
export const MenuList = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MenuItem = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  color: "rgba(255, 255, 255, 0.85)",
  cursor: "pointer",
  fontWeight: 500,
  padding: "8px 16px",
  borderRadius: "8px",
  transition: "all 0.25s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "var(--color-white)",
  },
}));

/*-------| Mobile Hamburger |-------*/
export const HamburgerButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "var(--color-white)",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export const DrawerCloseButton = styled(IconButton)({
  display: "flex",
  alignSelf: "flex-end",
  marginRight: "12px",
  color: "var(--color-grey-700)",
});

/*-------| Mobile Drawer |-------*/
export const MobileDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "280px",
    backgroundColor: "var(--color-white)",
    paddingTop: "16px",
    paddingBottom: "24px",
  },
});

export const MobileMenuList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: "8px",
});

export const MobileMenuItem = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "18px"),
  color: "var(--color-grey-800)",
  cursor: "pointer",
  fontWeight: 500,
  padding: "14px 24px",
  transition: "all 0.25s ease",
  "&:hover": {
    backgroundColor: "var(--color-grey-100)",
    color: "var(--color-black)",
  },
}));
