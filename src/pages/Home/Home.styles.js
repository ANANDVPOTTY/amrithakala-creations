import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";

export const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  marginTop: "-64px",
  paddingTop: "64px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  marginLeft: "-15rem",
  marginRight: "-15rem",
  paddingLeft: "15rem",
  paddingRight: "15rem",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  [theme.breakpoints.down("lg")]: {
    marginLeft: "-80px",
    marginRight: "-80px",
    paddingLeft: "80px",
    paddingRight: "80px",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "-40px",
    marginRight: "-40px",
    paddingLeft: "40px",
    paddingRight: "40px",
    backgroundPosition: "center center",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-20px",
    marginRight: "-20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    minHeight: "100svh",
    backgroundPosition: "top center",
  },
}));

export const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
});

export const HeroTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "48px"),
  color: "var(--color-white)",
  fontWeight: 700,
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "20px"),
  color: "rgba(255, 255, 255, 0.8)",
  fontWeight: 400,
  marginTop: "16px",
}));
