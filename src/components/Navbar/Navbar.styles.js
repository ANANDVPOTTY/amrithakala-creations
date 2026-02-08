import { styled } from "@mui/material/styles";
import { Box, Button, IconButton, Drawer, Divider } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";
import { responsivePagePadding } from "../../theme/commonStyles";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "14px",
  paddingBottom: "14px",
  ...responsivePagePadding(theme),
  background: "rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1100,

  [theme.breakpoints.down("sm")]: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
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
  gap: "22px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MenuItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  textTransform: "none",
  minWidth: "auto",
  ...responsiveFont(theme, "16px"),

  color: active ? "var(--color-white)" : "rgba(255, 255, 255, 0.85)",
  cursor: "pointer",
  fontWeight: 500,
  padding: "8px 20px",
  borderRadius: "8px",
  transition: "all 0.25s ease",
  backgroundColor: active ? "rgba(255, 255, 255, 0.15)" : "transparent",

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
  color: "var(--color-white)",
});

/*-------| Mobile Drawer |-------*/
export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "280px",
    background: "rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    paddingTop: "16px",
    paddingBottom: "24px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down(400)]: {
      width: "100vw",
    },
  },
}));

export const MobileMenuList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "12px",
  padding: "12px",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
});

export const DrawerDivider = styled(Divider)({
  borderColor: "rgba(255, 255, 255, 0.1)",
  width: "100%",
});

export const DrawerBottomSection = styled(Box)({
  marginTop: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px",
});

export const MobileMenuItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  width: "100%",
  ...responsiveFont(theme, "18px"),
  color: active ? "var(--color-white)" : "rgba(255, 255, 255, 0.85)",
  fontWeight: 500,
  padding: "14px 24px",
  textTransform: "none",
  justifyContent: "center",
  borderRadius: "8px",
  transition: "all 0.25s ease",
  backgroundColor: active ? "rgba(255, 255, 255, 0.15)" : "transparent",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "var(--color-white)",
  },
}));
