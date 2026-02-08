import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { responsiveFont } from "../../theme/responsiveFont";
import { responsivePagePadding } from "../../theme/commonStyles";

export const FooterContainer = styled(Box)(({ theme }) => ({
  ...responsivePagePadding(theme),
  paddingTop: "20px",
  paddingBottom: "20px",
  backgroundColor: "var(--color-primary-darkest)",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  textAlign: "center",
}));

export const CopyrightText = styled(Typography)(({ theme }) => ({
  ...responsiveFont(theme, "14px"),
  color: "var(--color-grey-400)",
  fontWeight: 400,
}));
