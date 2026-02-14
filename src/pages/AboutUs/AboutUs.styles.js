import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";
import { fadeInUp } from "../../theme/animations";

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
`;

/* ================================================================
   PAGE WRAPPER
   ================================================================ */

export const AboutUsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgImage" && prop !== "mobileBgImage",
})(({ theme, bgImage, mobileBgImage }) => ({
  minHeight: "100vh",
  marginTop: "-64px",
  paddingTop: "100px",
  paddingBottom: "60px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  isolation: "isolate",

  marginLeft: "-15rem",
  marginRight: "-15rem",
  paddingLeft: "15rem",
  paddingRight: "15rem",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: bgImage ? `url(${bgImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    zIndex: -2,

    [theme.breakpoints.down("sm")]: {
      backgroundImage: mobileBgImage ? `url(${mobileBgImage})` : undefined,
      backgroundAttachment: "scroll",
      position: "fixed",
    },
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
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

export const HeroTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "28px"),
  fontFamily: "var(--font-special)",
  color: "var(--color-white)",
  fontWeight: 700,
  marginBottom: "32px",
  textAlign: "center",
  position: "relative",

  "&::after": {
    content: '""',
    display: "block",
    width: "60px",
    height: "3px",
    background: "var(--color-primary)",
    margin: "12px auto 0",
    borderRadius: "2px",
  },

  "@media (max-width: 600px)": {
    fontSize: "22px",
    marginBottom: "24px",
  },
}));

/* ================================================================
   ABOUT SECTION (image left + text right)
   ================================================================ */

export const AboutSection = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1100px",
  display: "flex",
  gap: "48px",
  alignItems: "center",
  paddingTop: "20px",
  animation: `${fadeInUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards`,
  opacity: 0,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "36px",
    padding: "60px 0",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "40px 0",
    gap: "28px",
  },
}));

export const AboutImageBox = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: "420px",
  height: "500px",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: "380px",
    height: "440px",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "320px",
    height: "380px",
  },
}));

export const AboutImagePrimary = styled("img")(() => ({
  width: "80%",
  height: "88%",
  objectFit: "cover",
  display: "block",
  borderRadius: "32px",
  border: "2px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
}));

export const AboutImageSecondary = styled("img")(() => ({
  width: "55%",
  height: "50%",
  objectFit: "cover",
  display: "block",
  borderRadius: "32px",
  border: "3px solid rgba(255, 255, 255, 0.12)",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
  position: "absolute",
  bottom: 0,
  right: 0,
}));

export const AboutContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    alignItems: "center",
  },
}));

export const AboutHeading = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "36px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  color: "var(--color-white)",
  lineHeight: 1.3,
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  color: "rgba(255, 255, 255, 0.8)",
  fontWeight: 400,
  lineHeight: 1.8,
  whiteSpace: "pre-line",

  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.6,
  },
}));

export const AboutButton = styled(Button)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-active)",
  backgroundColor: "var(--color-primary)",
  color: "var(--color-white)",
  fontWeight: 600,
  padding: "12px 32px",
  borderRadius: "12px",
  textTransform: "none",
  alignSelf: "flex-start",
  marginTop: "8px",

  "&:hover": {
    backgroundColor: "var(--color-primary-dark)",
  },

  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "10px 24px",
    borderRadius: "10px",
  },
}));

/* ================================================================
   ART FORMS SECTION
   ================================================================ */

export const ArtFormsSection = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1100px",
  paddingBottom: "80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  animation: `${fadeInUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards`,
  opacity: 0,

  [theme.breakpoints.down("sm")]: {
    paddingBottom: "48px",
  },
}));

export const SectionTitle = styled(Typography)(() => ({
  color: "var(--color-white)",
  fontSize: "28px",
  fontWeight: 700,
  margin: "60px 0 40px 0",
  textAlign: "center",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: "60px",
    height: "3px",
    background: "var(--color-primary)",
    margin: "12px auto 0",
    borderRadius: "2px",
  },

  "@media (max-width: 600px)": {
    fontSize: "22px",
    marginBottom: "28px",
  },
}));

export const ArtFormsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  width: "100%",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
  },
}));

export const ArtFormCard = styled(Box)(() => ({
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  aspectRatio: "4/3",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  border: "1px solid rgba(255, 255, 255, 0.18)",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 30px rgba(195, 17, 12, 0.25)",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
  "&:hover > div": {
    opacity: 1,
  },
}));

export const ArtFormImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 0.4s ease",
}));

export const ArtFormOverlay = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(transparent 40%, rgba(0, 0, 0, 0.85) 100%)",
  display: "flex",
  alignItems: "flex-end",
  padding: "16px",
  opacity: 0,
  transition: "opacity 0.3s ease",
}));

export const ArtFormTitle = styled(Typography)(() => ({
  color: "var(--color-white)",
  fontSize: "15px",
  fontWeight: 600,
  textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
}));

/* ================================================================
   STATS SECTION
   ================================================================ */

export const StatsSection = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1100px",
  paddingBottom: "80px",
  animation: `${fadeInUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards`,
  opacity: 0,

  [theme.breakpoints.down("sm")]: {
    paddingBottom: "48px",
  },
}));

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "24px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gap: "16px",
  },
}));

export const StatCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  padding: "32px 16px",
  borderRadius: "12px",
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  transition: "transform 0.3s ease, border-color 0.3s ease",

  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: "rgba(195, 17, 12, 0.3)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "24px 12px",
  },
}));

export const StatValue = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "42px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  color: "var(--color-primary-light)",
}));

export const StatLabel = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  color: "rgba(255, 255, 255, 0.7)",
  fontWeight: 500,
  textAlign: "center",
}));

/* ================================================================
   CTA BANNER SECTION
   ================================================================ */
export const CtaBanner = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "32px",
  textAlign: "center",
}));

export const CtaContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgImage",
})(({ theme, bgImage }) => ({
  width: "calc(100% + 30rem)",
  marginLeft: "-15rem",
  marginRight: "-15rem",
  padding: 0,
  minHeight: "820px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  isolation: "isolate",
  borderRadius: "22px 22px 0 0",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: bgImage ? `url(${bgImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -2,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    zIndex: -1,
  },

  [theme.breakpoints.down("lg")]: {
    width: "calc(100% + 160px)",
    marginLeft: "-80px",
    marginRight: "-80px",
  },

  [theme.breakpoints.down("md")]: {
    width: "calc(100% + 80px)",
    marginLeft: "-40px",
    marginRight: "-40px",
    minHeight: "260px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "calc(100% + 40px)",
    marginLeft: "-20px",
    marginRight: "-20px",
    minHeight: "220px",
  },
}));

/* ================================================================
   CONTACT SECTION
   ================================================================ */

export const ContactSection = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1100px",
  paddingTop: "80px",
  paddingBottom: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  animation: `${fadeInUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards`,
  opacity: 0,

  [theme.breakpoints.down("sm")]: {
    paddingTop: "48px",
    paddingBottom: "24px",
  },
}));

export const ContactGrid = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "32px",
  alignItems: "stretch",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "28px",
  },
}));

export const ContactCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "36px",
  borderRadius: "16px",
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",

  [theme.breakpoints.down("sm")]: {
    padding: "24px",
    gap: "16px",
  },
}));

export const ContactLabel = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  fontWeight: 600,
  color: "var(--color-primary-light)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
}));

export const ContactText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  color: "rgba(255, 255, 255, 0.85)",
  lineHeight: 1.8,
  whiteSpace: "pre-line",
}));

export const ContactPhoneList = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
}));

export const ContactPhone = styled("a")(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  color: "rgba(255, 255, 255, 0.85)",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.2s",
  letterSpacing: "0.08em",
  "&:hover": {
    color: "var(--color-primary-light)",
  },
}));

export const SocialLinks = styled(Box)(() => ({
  display: "flex",
  gap: "12px",
  marginTop: "4px",
}));

export const SocialLink = styled("a")(() => ({
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255, 255, 255, 0.85)",
  textDecoration: "none",
  transition: "background-color 0.2s, border-color 0.2s, color 0.2s",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "var(--color-primary-light)",
    color: "var(--color-primary-light)",
  },

  "& svg": {
    fontSize: "20px",
  },
}));

export const MapWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "320px",
  borderRadius: "16px",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.09)",

  "& iframe": {
    width: "100%",
    height: "100%",
    minHeight: "320px",
    border: 0,
    display: "block",
    filter: "brightness(0.85) contrast(1.1)",
  },

  [theme.breakpoints.down("md")]: {
    minHeight: "280px",
    "& iframe": {
      minHeight: "280px",
    },
  },
}));

export const CtaVideo = styled("video")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -2,
}));

export const MuteToggle = styled("button")(() => ({
  position: "absolute",
  bottom: "24px",
  right: "24px",
  zIndex: 2,
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  color: "var(--color-white)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s, border-color 0.2s",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    borderColor: "rgba(255, 255, 255, 0.35)",
  },

  "& svg": {
    fontSize: "22px",
  },
}));

export const CtaHeading = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "36px"),
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  color: "var(--color-white)",
  maxWidth: "600px",
  lineHeight: 1.3,
}));

export const CtaButton = styled(Button)(({ theme }) => ({
  ...responsiveFont(theme, "16px"),
  fontFamily: "var(--font-active)",
  backgroundColor: "var(--color-primary)",
  color: "var(--color-white)",
  fontWeight: 600,
  padding: "12px 36px",
  borderRadius: "24px",
  textTransform: "none",
  marginTop: "8px",
  animation: `${pulse} 2s ease-in-out infinite`,

  "&:hover": {
    backgroundColor: "var(--color-primary-dark)",
    animationPlayState: "paused",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "10px 28px",
  },
}));
