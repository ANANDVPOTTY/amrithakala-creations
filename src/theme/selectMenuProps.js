const selectMenuProps = {
  PaperProps: {
    sx: {
      maxHeight: 300,
      backgroundColor: "var(--color-dark)",
      border: "1px solid var(--color-grey-700)",
      "& .MuiMenuItem-root": {
        color: "var(--color-white)",
        fontFamily: "var(--font-active)",
        fontSize: "14px",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
        },
        "&.Mui-selected": {
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.16)",
          },
        },
      },
    },
  },
};

export default selectMenuProps;
