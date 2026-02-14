const pickerPopperSx = {
  "& .MuiPaper-root": {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
  },
  "& .MuiPickersDay-root": {
    "&.Mui-selected": {
      backgroundColor: "var(--color-primary)",
      "&:hover": { backgroundColor: "var(--color-primary-dark)" },
    },
  },
  "& .MuiPickersYear-yearButton": {
    "&.Mui-selected": { backgroundColor: "var(--color-primary)" },
  },
  "& .MuiClock-pin, & .MuiClockPointer-root": {
    backgroundColor: "var(--color-primary)",
  },
  "& .MuiClockPointer-thumb": { borderColor: "var(--color-primary)" },
  "& .MuiDialogActions-root .MuiButton-root": {
    color: "var(--color-primary)",
  },
};

export default pickerPopperSx;
