/*-------| Global Responsive Page Padding |-------*/
export const responsivePagePadding = (theme) => ({
  paddingLeft: "15rem",
  paddingRight: "15rem",

  [theme.breakpoints.down("lg")]: {
    paddingLeft: "80px",
    paddingRight: "80px",
  },

  [theme.breakpoints.down("md")]: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});
