import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";
import { responsivePagePadding } from "../../theme/commonStyles";

export const FooterContainer = styled(Box)(({ theme }) => ({
  ...responsivePagePadding(theme),
  position: "relative",
  zIndex: 1,
  paddingTop: "20px",
  paddingBottom: "20px",
  backgroundColor: "var(--color-primary-darkest)",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",

  [theme.breakpoints.down("sm")]: {
    paddingTop: "16px",
    paddingBottom: "16px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
}));

export const LogoSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

export const FooterLogo = styled("img")(({ theme }) => ({
  height: "80px",
  width: "auto",
  objectFit: "contain",

  [theme.breakpoints.down("sm")]: {
    height: "70px",
  },
}));

export const CopyrightText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  color: "var(--color-grey-400)",
  fontWeight: 400,
  textAlign: "center",
}));
