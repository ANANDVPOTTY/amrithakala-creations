import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const FormWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  marginTop: "-64px",
  paddingTop: "100px",
  paddingBottom: "60px",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  isolation: "isolate",

  marginLeft: "-15rem",
  marginRight: "-15rem",
  paddingLeft: "15rem",
  paddingRight: "15rem",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    zIndex: -2,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },

  [theme.breakpoints.down("lg")]: {
    marginLeft: "-80px",
    marginRight: "-80px",
    paddingLeft: "80px",
    paddingRight: "80px",
  },

  [theme.breakpoints.down("md")]: {
    marginLeft: "-40px",
    marginRight: "-40px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },

  [theme.breakpoints.down("sm")]: {
    marginLeft: "-20px",
    marginRight: "-20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    minHeight: "100svh",
  },
}));

export const FormCard = styled(Box)(() => ({
  width: "100%",
  maxWidth: "720px",
  borderRadius: "16px",
  padding: "40px 36px",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  border: "1px solid rgba(255, 255, 255, 0.09)",

  "& .MuiTextField-root": {
    marginBottom: "8px",
  },

  "& .MuiOutlinedInput-root": {
    color: "var(--color-white)",
    fontFamily: "var(--font-active)",
    "& fieldset": {
      borderColor: "var(--color-grey-700)",
    },
    "&:hover fieldset": {
      borderColor: "var(--color-grey-500)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--color-primary)",
    },
    "&.Mui-error fieldset": {
      borderColor: "var(--color-error)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "var(--color-grey-400)",
    fontFamily: "var(--font-active)",
    "&.Mui-focused": {
      color: "var(--color-primary)",
    },
  },
  "& .MuiInputAdornment-root": {
    color: "var(--color-grey-400)",
  },
  "& .MuiSelect-icon": {
    color: "var(--color-grey-400)",
  },

  "@media (max-width: 600px)": {
    padding: "24px 16px",
    borderRadius: "12px",
  },
}));

export const FormTitle = styled(Typography)(() => ({
  color: "var(--color-white)",
  fontSize: "24px",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "32px",
  lineHeight: 1.5,

  "@media (max-width: 600px)": {
    fontSize: "18px",
    marginBottom: "24px",
  },
}));

export const SectionLabel = styled(Typography)(() => ({
  color: "var(--color-white)",
  fontSize: "15px",
  fontWeight: 600,
  marginBottom: "8px",
  marginTop: "16px",
  display: "flex",
  alignItems: "center",
  gap: "4px",

  "@media (max-width: 600px)": {
    fontSize: "14px",
  },
}));

export const RequiredStar = styled("span")(() => ({
  color: "var(--color-error)",
  fontSize: "16px",
  fontWeight: 700,
}));

export const UpiNote = styled(Typography)(() => ({
  color: "var(--color-warning)",
  fontSize: "13px",
  fontWeight: 500,
  marginBottom: "16px",
  padding: "8px 12px",
  background: "rgba(237, 108, 2, 0.1)",
  borderRadius: "6px",
  border: "1px solid rgba(237, 108, 2, 0.3)",
}));

export const TermsBox = styled(Box)(() => ({
  background: "rgba(0, 0, 0, 0.3)",
  border: "1px solid var(--color-grey-700)",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "20px",
  maxHeight: "300px",
  overflowY: "auto",
}));

export const TermItem = styled(Typography)(() => ({
  color: "var(--color-grey-300)",
  fontSize: "13px",
  lineHeight: 1.8,
  marginBottom: "8px",
  whiteSpace: "pre-line",

  "& strong": {
    color: "var(--color-white)",
    fontWeight: 600,
  },
}));

export const SignatureWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "error",
})(({ error }) => ({
  position: "relative",
  border: `2px ${error ? "solid var(--color-error)" : "dashed var(--color-grey-600)"}`,
  borderRadius: "8px",
  marginBottom: "20px",
  overflow: "hidden",
  background: "rgba(0,0,0,0.3)",
}));

export const SignatureCanvas = styled("canvas")(() => ({
  width: "100%",
  height: "120px",
  cursor: "crosshair",
  display: "block",
  touchAction: "none",
}));

export const Tagline = styled(Typography)(() => ({
  color: "var(--color-primary)",
  fontSize: "18px",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "24px",
  fontStyle: "italic",

  "@media (max-width: 600px)": {
    fontSize: "16px",
  },
}));

export const SubmitButton = styled(Button)(() => ({
  background:
    "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
  color: "var(--color-white)",
  fontFamily: "var(--font-active)",
  fontSize: "16px",
  fontWeight: 700,
  padding: "12px",
  borderRadius: "8px",
  textTransform: "none",
  "&:hover": {
    background:
      "linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)",
  },
}));

export const FieldRow = styled(Box)(() => ({
  display: "flex",
  gap: "12px",
  marginBottom: "8px",

  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: "8px",
  },
}));

export const UploadArea = styled(Box)(() => ({
  border: "2px dashed var(--color-grey-600)",
  borderRadius: "8px",
  padding: "24px",
  textAlign: "center",
  marginBottom: "16px",
  background: "rgba(0,0,0,0.2)",
  cursor: "pointer",
  transition: "border-color 0.2s",
  "&:hover": {
    borderColor: "var(--color-grey-400)",
  },
}));

export const UploadedPreview = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px",
  border: "1px solid var(--color-grey-700)",
  borderRadius: "8px",
  marginBottom: "16px",
  background: "rgba(0,0,0,0.2)",
}));
