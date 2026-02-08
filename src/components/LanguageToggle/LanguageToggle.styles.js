import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";

export const ToggleContainer = styled(Box)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  width: "78px",
  height: "32px",
  backgroundColor: "transparent",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "60px",
  cursor: "pointer",
  userSelect: "none",
});

export const ToggleThumb = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
})(({ checked }) => ({
  position: "absolute",
  top: "2px",
  left: "2px",
  width: "34px",
  height: "26px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: "42px",
  transition: "transform 0.2s ease",
  transform: checked ? "translateX(38px)" : "translateX(0)",
}));

export const ToggleLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "checked" && prop !== "side",
})(({ theme, checked, side }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...responsiveFont(theme, "10px"),
  fontWeight: 700,
  textTransform: "uppercase",
  pointerEvents: "none",

  ...(side === "left" && {
    left: 0,
    color: checked ? "rgba(255, 255, 255, 0.5)" : "var(--color-white)",
  }),

  ...(side === "right" && {
    right: 0,
    color: checked ? "var(--color-white)" : "rgba(255, 255, 255, 0.5)",
  }),
}));
