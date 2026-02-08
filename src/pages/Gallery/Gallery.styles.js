import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";

export const GalleryContainer = styled(Box)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 0",
  marginTop: "-64px",
});

export const GalleryTitle = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "36px"),
  color: "var(--color-white)",
  fontWeight: 700,
  marginTop: "64px",
}));
