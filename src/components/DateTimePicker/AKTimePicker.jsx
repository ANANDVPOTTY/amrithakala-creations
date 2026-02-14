import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import pickerPopperSx from "./pickerPopperSx";

const AKTimePicker = ({ value, onChange, error, placeholder = "HH:MM", ...rest }) => (
  <TimePicker
    value={value}
    onChange={onChange}
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

export default AKTimePicker;
