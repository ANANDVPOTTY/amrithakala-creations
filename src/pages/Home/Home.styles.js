import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";
import { titleReveal, fadeInUp, gradientFlow } from "../../theme/animations";

export const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  marginTop: "-64px",
  paddingTop: "64px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  marginLeft: "-15rem",
  marginRight: "-15rem",
  paddingLeft: "15rem",
  paddingRight: "15rem",
  position: "relative",
  isolation: "isolate",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    transform: "scaleX(-1)",
    zIndex: -2,

    [theme.breakpoints.down("md")]: {
      backgroundPosition: "center center",
      transform: "none",
    },
  },

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
  },

  [theme.breakpoints.down("sm")]: {
    marginLeft: "-20px",
    marginRight: "-20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    minHeight: "100svh",
  },
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  textAlign: "left",
  maxWidth: "840px",
  borderRadius: "16px",
  padding: "48px",
  marginTop: "28px",

  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  border: "1px solid rgba(255, 255, 255, 0.09)",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    padding: "36px",
    borderRadius: "14px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "28px",
    borderRadius: "12px",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    border: "1px solid rgba(255, 255, 255, 0.03)",
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "80px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  background:
    "linear-gradient(270deg, #f5e6ca, #ffd89b, var(--color-white), #ffd89b, #f5e6ca)",
  backgroundSize: "300% 100%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: `${titleReveal} 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards, ${gradientFlow} 16s ease-in-out infinite 1.2s`,
  opacity: 0,
  overflowWrap: "break-word",

  [theme.breakpoints.down("md")]: {
    fontSize: "clamp(24px, 7vw, 48px)",
  },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  color: "rgba(255, 255, 255, 0.85)",
  fontWeight: 400,
  lineHeight: 1.8,
  marginTop: "24px",
  animation: `${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards`,
  opacity: 0,

  [theme.breakpoints.down("sm")]: {
    marginTop: "16px",
    lineHeight: 1.6,
  },
}));

export const HeroButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",
  marginTop: "32px",
  animation: `${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) 1s forwards`,
  opacity: 0,

  [theme.breakpoints.down("md")]: {
    marginTop: "24px",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "12px",
    marginTop: "20px",
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-active)",
  backgroundColor: "var(--color-primary)",
  color: "var(--color-white)",
  fontWeight: 600,
  padding: "12px 32px",
  borderRadius: "12px",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "var(--color-primary-dark)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "10px 24px",
    borderRadius: "10px",
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-active)",
  color: "var(--color-white)",
  fontWeight: 600,
  padding: "12px 32px",
  borderRadius: "12px",
  textTransform: "none",
  border: "2px solid var(--color-white)",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "var(--color-white)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "10px 24px",
    borderRadius: "10px",
  },
}));
