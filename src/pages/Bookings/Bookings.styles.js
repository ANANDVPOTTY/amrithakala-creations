import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Alert,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const FormWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgImage" && prop !== "mobileBgImage",
})(({ theme, bgImage, mobileBgImage }) => ({
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
    backgroundImage: bgImage ? `url(${bgImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    zIndex: -2,
    [theme.breakpoints.down("sm")]: {
      backgroundImage: mobileBgImage ? `url(${mobileBgImage})` : undefined,
      backgroundAttachment: "scroll",
      position: "fixed",
    },
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

export const FormCard = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "900px",
  borderRadius: "16px",
  padding: "48px 40px",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  border: "1px solid rgba(255, 255, 255, 0.09)",

  "& .MuiTextField-root": {
    marginBottom: "16px",
  },

  "& .MuiOutlinedInput-root": {
    color: "var(--color-white)",
    fontFamily: "var(--font-active)",
    padding: "10px 14px",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "var(--color-grey-700)",
    },
    "&:hover fieldset": {
      borderColor: "var(--color-grey-500)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--color-primary-light)",
      borderWidth: "1px",
    },
    "&.Mui-error fieldset": {
      borderColor: "var(--color-error)",
    },
  },

  "& .MuiInputAdornment-root": {
    color: "var(--color-white)",
  },
  "& .MuiSelect-icon": {
    color: "var(--color-grey-400)",
  },
  "& .MuiIconButton-root": {
    color: "var(--color-grey-400)",
  },
  "& .MuiInputBase-input": {
    color: "var(--color-white)",
    fontFamily: "var(--font-active)",
    "&::placeholder": {
      color: "var(--color-grey-500)",
      opacity: 1,
    },
  },

  /* MUI X DatePicker / TimePicker (v8 uses PickersOutlinedInput) */
  "& .MuiPickersOutlinedInput-root": {
    color: "var(--color-white)",
    fontFamily: "var(--font-active)",
    padding: "10px 14px",
    borderRadius: "10px",
    "& .MuiPickersOutlinedInput-notchedOutline": {
      borderColor: "var(--color-grey-700)",
    },
    "&:hover .MuiPickersOutlinedInput-notchedOutline": {
      borderColor: "var(--color-grey-500)",
    },
    "&.Mui-focused .MuiPickersOutlinedInput-notchedOutline": {
      borderColor: "var(--color-primary-light)",
      borderWidth: "1px",
    },
    "&.Mui-error .MuiPickersOutlinedInput-notchedOutline": {
      borderColor: "var(--color-error)",
    },
  },
  "& .MuiPickersInputBase-sectionContent": {
    color: "var(--color-white)",
    fontFamily: "var(--font-active)",
  },

  "@media (max-width: 600px)": {
    padding: "24px 16px",
    borderRadius: "12px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "28px",
    borderRadius: "12px",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    border: "1px solid rgba(255, 255, 255, 0.03)",
  },
}));

export const FormTitle = styled(Typography)(() => ({
  color: "var(--color-white)",
  fontSize: "24px",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "40px",
  lineHeight: 1.5,

  "@media (max-width: 600px)": {
    fontSize: "18px",
    marginBottom: "32px",
  },
}));

export const SectionLabel = styled(Typography)(() => ({
  color: "var(--color-white)",
  fontSize: "15px",
  fontWeight: 600,
  marginBottom: "12px",
  marginTop: "24px",
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
  color: "var(--color-grey-400)",
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
  marginBottom: "28px",
  overflow: "hidden",
  background: "rgba(0,0,0,0.3)",
}));

export const ClearSignatureButton = styled(Button)(() => ({
  color: "var(--color-grey-400)",
  position: "absolute",
  top: 4,
  right: 4,
  minWidth: "auto",
  fontSize: "12px",
}));

export const SignatureCanvas = styled("canvas")(() => ({
  width: "100%",
  height: "120px",
  cursor: "crosshair",
  display: "block",
  touchAction: "none",
}));

export const Tagline = styled(Typography)(() => ({
  fontSize: "18px",
  color: "var(--color-primary-light)",
  fontFamily: "var(--font-special)",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "32px",
  fontStyle: "italic",

  "@media (max-width: 600px)": {
    fontSize: "16px",
  },
}));

export const SubmitButton = styled(Button)(() => ({
  background: "var(--color-success)",
  color: "var(--color-white)",
  fontFamily: "var(--font-active)",
  fontSize: "16px",
  fontWeight: 500,
  padding: "12px",
  borderRadius: "8px",
  textTransform: "none",

  "&:hover": {
    background: "#266b2a",
  },
}));

export const FieldRow = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  marginBottom: "12px",

  "& .MuiTextField-root": {
    marginBottom: 0,
  },

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

/* Upload section */
export const HiddenFileInput = styled("input")(() => ({
  display: "none",
}));

export const UploadLabel = styled("label")(() => ({
  cursor: "pointer",
  textAlign: "center",
}));

export const UploadIcon = styled(CloudUploadIcon)(() => ({
  fontSize: 40,
  color: "var(--color-grey-400)",
  marginBottom: "8px",
  display: "block",
  margin: "0 auto 8px",
}));

export const UploadHintText = styled(Typography)(() => ({
  color: "var(--color-grey-400)",
}));

export const FileNameText = styled(Typography)(() => ({
  color: "var(--color-white)",
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const RemoveFileButton = styled(IconButton)(() => ({
  color: "var(--color-grey-400)",
}));

export const FieldError = styled(Typography)(() => ({
  color: "var(--color-error)",
  fontSize: "12px",
  marginTop: "4px",
}));

/* Checkbox components */
export const StyledCheckbox = styled(Checkbox)(() => ({
  color: "var(--color-grey-400)",
  "&.Mui-checked": { color: "var(--color-primary)" },
}));

export const DramaFormControl = styled(FormControlLabel)(() => ({
  color: "var(--color-white)",
}));

export const TermsCheckboxWrapper = styled(Box)(() => ({
  border: "1px solid var(--color-grey-700)",
  borderRadius: "8px",
  padding: "16px",
  background: "rgba(0,0,0,0.3)",
}));

export const TermsCheckbox = styled(Checkbox, {
  shouldForwardProp: (prop) => prop !== "hasError",
})(({ hasError }) => ({
  color: hasError ? "var(--color-error)" : "var(--color-grey-400)",
  "&.Mui-checked": { color: "var(--color-primary)" },
}));

export const TermsLabelText = styled(Typography)(() => ({
  color: "var(--color-white)",
  fontSize: "14px",
}));

export const StyledAlert = styled(Alert)(() => ({
  width: "100%",
  textAlign: "center",
}));
