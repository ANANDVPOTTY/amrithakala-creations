import { useState, useRef, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TextField, MenuItem, InputAdornment, Snackbar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import AKDatePicker from "../../components/DateTimePicker/AKDatePicker";
import AKTimePicker from "../../components/DateTimePicker/AKTimePicker";
import {
  FormWrapper,
  FormCard,
  FormTitle,
  SectionLabel,
  RequiredStar,
  UpiNote,
  TermsBox,
  TermItem,
  ClearSignatureButton,
  SignatureCanvas,
  SignatureWrapper,
  Tagline,
  SubmitButton,
  FieldRow,
  UploadArea,
  UploadedPreview,
  HiddenFileInput,
  UploadLabel,
  UploadIcon,
  UploadHintText,
  FileNameText,
  RemoveFileButton,
  FieldError,
  StyledCheckbox,
  DramaFormControl,
  TermsCheckboxWrapper,
  TermsCheckbox,
  TermsLabelText,
  StyledAlert,
} from "./Bookings.styles";
import bookingBgImage from "../../assets/backgrounds/booking-bg.png";
import bookingMobileBgImage from "../../assets/backgrounds/booking-mobile-bg.jpg";
import { INDIAN_STATES } from "../../data/indianStates";
import selectMenuProps from "../../theme/selectMenuProps";

const Bookings = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    houseName: "",
    place: "",
    city: "",
    state: "Kerala",
    pinCode: "",
    country: "India",
    phone: "",
    agentName: "",
    dramaSelected: true,
    venuePlace: "",
    venueTaluk: "",
    venueDistrict: "",
    venueState: "Kerala",
    venueCountry: "India",
    performanceDate: null,
    performanceTime: null,
    bookingAmount: "",
    advancePaid: "",
    screenshot: null,
    termsAccepted: false,
    directions: "",
    bookerName: "",
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  const remainingAmount =
    form.bookingAmount && form.advancePaid
      ? Math.max(0, Number(form.bookingAmount) - Number(form.advancePaid))
      : "";

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, screenshot: file }));
      if (errors.screenshot)
        setErrors((prev) => ({ ...prev, screenshot: false }));
    }
  };

  const removeFile = () => {
    setForm((prev) => ({ ...prev, screenshot: null }));
  };

  const initCanvas = useCallback((canvas) => {
    if (!canvas) return;
    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        ctx.putImageData(imageData, 0, 0);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const startDraw = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    const ctx = canvasRef.current.getContext("2d");
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const ctx = canvasRef.current.getContext("2d");
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    setHasSignature(true);
  };

  const endDraw = () => setIsDrawing(false);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const validate = () => {
    const required = {
      firstName: form.firstName,
      lastName: form.lastName,
      houseName: form.houseName,
      place: form.place,
      city: form.city,
      phone: form.phone,
      venuePlace: form.venuePlace,
      venueTaluk: form.venueTaluk,
      venueDistrict: form.venueDistrict,
      performanceDate: form.performanceDate,
      performanceTime: form.performanceTime,
      bookingAmount: form.bookingAmount,
      advancePaid: form.advancePaid,
      screenshot: form.screenshot,
      directions: form.directions,
      bookerName: form.bookerName,
    };
    const newErrors = {};
    Object.entries(required).forEach(([key, val]) => {
      if (!val) newErrors[key] = true;
    });
    if (!form.termsAccepted) newErrors.termsAccepted = true;
    if (!hasSignature) newErrors.signature = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSnackbar({
        open: true,
        message: t("bookings.fillRequired"),
        severity: "error",
      });
      return;
    }
    setSnackbar({
      open: true,
      message: t("bookings.submitSuccess"),
      severity: "success",
    });
  };

  return (
    <FormWrapper bgImage={bookingBgImage} mobileBgImage={bookingMobileBgImage}>
      <FormCard component="form" onSubmit={handleSubmit} noValidate>
        <FormTitle>{t("bookings.formTitle")}</FormTitle>

        <SectionLabel>
          {t("bookings.bookerName")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <FieldRow>
          <TextField
            fullWidth
            placeholder={t("bookings.firstName")}
            value={form.firstName}
            onChange={handleChange("firstName")}
            error={!!errors.firstName}
            size="small"
          />
          <TextField
            fullWidth
            placeholder={t("bookings.lastName")}
            value={form.lastName}
            onChange={handleChange("lastName")}
            error={!!errors.lastName}
            size="small"
          />
        </FieldRow>

        <SectionLabel>
          {t("bookings.bookerAddress")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <TextField
          fullWidth
          placeholder={t("bookings.houseName")}
          value={form.houseName}
          onChange={handleChange("houseName")}
          error={!!errors.houseName}
          size="small"
        />
        <FieldRow>
          <TextField
            fullWidth
            placeholder={t("bookings.place")}
            value={form.place}
            onChange={handleChange("place")}
            error={!!errors.place}
            size="small"
          />
          <TextField
            fullWidth
            placeholder={t("bookings.city")}
            value={form.city}
            onChange={handleChange("city")}
            error={!!errors.city}
            size="small"
          />
        </FieldRow>
        <FieldRow>
          <TextField
            fullWidth
            select
            value={form.state}
            onChange={handleChange("state")}
            size="small"
            slotProps={{
              select: {
                MenuProps: selectMenuProps,
                IconComponent: KeyboardArrowDownRoundedIcon,
              },
            }}
          >
            {INDIAN_STATES.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            placeholder={t("bookings.pinCode")}
            value={form.pinCode}
            onChange={handleChange("pinCode")}
            size="small"
          />
        </FieldRow>
        <TextField
          fullWidth
          placeholder={t("bookings.country")}
          value={form.country}
          onChange={handleChange("country")}
          size="small"
        />

        <SectionLabel>
          {t("bookings.phoneLabel")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <TextField
          fullWidth
          placeholder={t("bookings.phone")}
          value={form.phone}
          onChange={handleChange("phone")}
          error={!!errors.phone}
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            },
          }}
        />

        <SectionLabel>{t("bookings.agentLabel")}</SectionLabel>
        <TextField
          fullWidth
          placeholder={t("bookings.agentName")}
          value={form.agentName}
          onChange={handleChange("agentName")}
          size="small"
        />

        <SectionLabel>
          {t("bookings.dramaLabel")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <DramaFormControl
          control={
            <StyledCheckbox
              checked={form.dramaSelected}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  dramaSelected: e.target.checked,
                }))
              }
            />
          }
          label={t("bookings.dramaName")}
        />

        <SectionLabel>
          {t("bookings.venueAddress")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <FieldRow>
          <TextField
            fullWidth
            placeholder={t("bookings.place")}
            value={form.venuePlace}
            onChange={handleChange("venuePlace")}
            error={!!errors.venuePlace}
            size="small"
          />
          <TextField
            fullWidth
            placeholder={t("bookings.taluk")}
            value={form.venueTaluk}
            onChange={handleChange("venueTaluk")}
            error={!!errors.venueTaluk}
            size="small"
          />
        </FieldRow>
        <FieldRow>
          <TextField
            fullWidth
            placeholder={t("bookings.district")}
            value={form.venueDistrict}
            onChange={handleChange("venueDistrict")}
            error={!!errors.venueDistrict}
            size="small"
          />
          <TextField
            fullWidth
            select
            value={form.venueState}
            onChange={handleChange("venueState")}
            size="small"
            slotProps={{
              select: {
                MenuProps: selectMenuProps,
                IconComponent: KeyboardArrowDownRoundedIcon,
              },
            }}
          >
            {INDIAN_STATES.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </TextField>
        </FieldRow>
        <TextField
          fullWidth
          placeholder={t("bookings.country")}
          value={form.venueCountry}
          onChange={handleChange("venueCountry")}
          size="small"
        />

        <SectionLabel>
          {t("bookings.performanceDate")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <AKDatePicker
          value={form.performanceDate}
          onChange={(val) => {
            setForm((prev) => ({ ...prev, performanceDate: val }));
            if (errors.performanceDate)
              setErrors((prev) => ({ ...prev, performanceDate: false }));
          }}
          error={!!errors.performanceDate}
        />

        <SectionLabel>
          {t("bookings.performanceTime")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <AKTimePicker
          value={form.performanceTime}
          onChange={(val) => {
            setForm((prev) => ({ ...prev, performanceTime: val }));
            if (errors.performanceTime)
              setErrors((prev) => ({ ...prev, performanceTime: false }));
          }}
          error={!!errors.performanceTime}
        />

        <SectionLabel>
          {t("bookings.bookingAmount")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <TextField
          fullWidth
          type="number"
          value={form.bookingAmount}
          onChange={handleChange("bookingAmount")}
          error={!!errors.bookingAmount}
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            },
          }}
        />
        <UpiNote>{t("bookings.upiNote")}</UpiNote>

        <SectionLabel>
          {t("bookings.advancePaid")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <TextField
          fullWidth
          type="number"
          value={form.advancePaid}
          onChange={handleChange("advancePaid")}
          error={!!errors.advancePaid}
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            },
          }}
        />

        <SectionLabel>
          {t("bookings.screenshotLabel")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        {form.screenshot ? (
          <UploadedPreview>
            <FileNameText>{form.screenshot.name}</FileNameText>
            <RemoveFileButton onClick={removeFile} size="small">
              <DeleteIcon />
            </RemoveFileButton>
          </UploadedPreview>
        ) : (
          <UploadArea>
            <HiddenFileInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="screenshot-upload"
            />
            <UploadLabel htmlFor="screenshot-upload">
              <UploadIcon />
              <UploadHintText>{t("bookings.chooseFile")}</UploadHintText>
            </UploadLabel>
          </UploadArea>
        )}
        {errors.screenshot && <FieldError>{t("bookings.required")}</FieldError>}

        <SectionLabel>{t("bookings.remainingAmount")}</SectionLabel>
        <TextField
          fullWidth
          value={remainingAmount === "" ? "" : `₹ ${remainingAmount}`}
          size="small"
          slotProps={{ input: { readOnly: true } }}
        />

        <TermsCheckboxWrapper>
          <DramaFormControl
            control={
              <TermsCheckbox
                hasError={!!errors.termsAccepted}
                checked={form.termsAccepted}
                onChange={(e) => {
                  setForm((prev) => ({
                    ...prev,
                    termsAccepted: e.target.checked,
                  }));
                  if (errors.termsAccepted)
                    setErrors((prev) => ({ ...prev, termsAccepted: false }));
                }}
              />
            }
            label={
              <TermsLabelText>
                {t("bookings.termsCheckbox")} <RequiredStar>*</RequiredStar>
              </TermsLabelText>
            }
          />
        </TermsCheckboxWrapper>

        <SectionLabel>
          {t("bookings.termsTitle")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <TermsBox>
          <TermItem>1. {t("bookings.term1")}</TermItem>
          <TermItem>2. {t("bookings.term2")}</TermItem>
          <TermItem>3. {t("bookings.term3")}</TermItem>
          <TermItem>4. {t("bookings.term4")}</TermItem>
          <TermItem>5. {t("bookings.term5")}</TermItem>
          <TermItem>6. {t("bookings.term6")}</TermItem>
          <TermItem>7. {t("bookings.term7")}</TermItem>
        </TermsBox>

        <SectionLabel>
          {t("bookings.directionsLabel")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <TextField
          fullWidth
          multiline
          rows={3}
          value={form.directions}
          onChange={handleChange("directions")}
          error={!!errors.directions}
          size="small"
        />

        <SectionLabel>
          {t("bookings.confirmBookerName")} <RequiredStar>*</RequiredStar>
        </SectionLabel>
        <TextField
          fullWidth
          value={form.bookerName}
          onChange={handleChange("bookerName")}
          error={!!errors.bookerName}
          size="small"
        />

        <SectionLabel>
          {t("bookings.signatureLabel")} <RequiredStar>*</RequiredStar>
        </SectionLabel>

        <SignatureWrapper error={errors.signature}>
          <SignatureCanvas
            ref={initCanvas}
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={endDraw}
            onMouseLeave={endDraw}
            onTouchStart={startDraw}
            onTouchMove={draw}
            onTouchEnd={endDraw}
          />
          <ClearSignatureButton size="small" onClick={clearSignature}>
            Clear
          </ClearSignatureButton>
        </SignatureWrapper>

        <Tagline>{t("bookings.tagline")}</Tagline>

        <SubmitButton type="submit" variant="contained" fullWidth>
          {t("bookings.submit")}
        </SubmitButton>
      </FormCard>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((p) => ({ ...p, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <StyledAlert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </StyledAlert>
      </Snackbar>
    </FormWrapper>
  );
};

export default Bookings;
