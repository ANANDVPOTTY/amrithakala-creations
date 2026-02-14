import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { responsivePagePadding } from "../theme/commonStyles";

export const MainContainer = styled(Box)({
  backgroundColor: "var(--color-dark)",
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "64px",
  background:
    "linear-gradient(180deg, var(--color-primary-darkest) 0%, var(--color-dark) 120px, var(--color-dark) 100%)",
  minHeight: "100vh",
  ...responsivePagePadding(theme),
}));
