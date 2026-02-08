import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";

export const AboutUsContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 0",
  marginTop: "-64px",

  [theme.breakpoints.down("sm")]: {
    padding: "24px 0",
    minHeight: "100svh",
  },
}));

export const AboutUsTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "36px"),
  color: "var(--color-white)",
  fontWeight: 700,
  marginTop: "64px",

  [theme.breakpoints.down("sm")]: {
    marginTop: "48px",
  },
}));
