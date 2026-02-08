import { useTranslation } from "react-i18next";
import { BookingsContainer, BookingsTitle } from "./Bookings.styles";

const Bookings = () => {
  const { t } = useTranslation();

  return (
    <BookingsContainer>
      <BookingsTitle>{t("bookings.title")}</BookingsTitle>
    </BookingsContainer>
  );
};

export default Bookings;
