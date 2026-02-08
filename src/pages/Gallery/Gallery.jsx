import { useTranslation } from "react-i18next";
import { GalleryContainer, GalleryTitle } from "./Gallery.styles";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <GalleryContainer>
      <GalleryTitle>{t("gallery.title")}</GalleryTitle>
    </GalleryContainer>
  );
};

export default Gallery;
