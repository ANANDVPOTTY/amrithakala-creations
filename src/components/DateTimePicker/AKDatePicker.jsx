import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import pickerPopperSx from "./pickerPopperSx";

const AKDatePicker = ({ value, onChange, error, format = "DD/MM/YYYY", placeholder = "DD/MM/YYYY", disablePast = true, ...rest }) => (
  <DatePicker
    value={value}
    onChange={onChange}
    minDate={disablePast ? dayjs() : undefined}
    format={format}
    slotProps={{
      textField: {
        fullWidth: true,
        size: "small",
        error,
        placeholder,
      },
      popper: { sx: pickerPopperSx },
    }}
    {...rest}
  />
);

export default AKDatePicker;
