import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { responsivePagePadding } from "../theme/commonStyles";

export const MainContainer = styled(Box)({});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  marginTop: "64px",
  ...responsivePagePadding(theme),
}));
