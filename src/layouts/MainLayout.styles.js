import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { responsivePagePadding } from "../theme/commonStyles";

export const MainContainer = styled(Box)({
  backgroundColor: "var(--color-dark)",
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  marginTop: "64px",
  backgroundColor: "var(--color-dark)",
  minHeight: "100vh",
  ...responsivePagePadding(theme),
}));
