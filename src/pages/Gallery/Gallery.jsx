import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import galleryBgImage from "../../assets/images/gallery-bg.jpg";
import {
  GalleryWrapper,
  CarouselSection,
  SectionTitle,
  GridSection,
  GridCard,
  GridImage,
  GridOverlay,
  GridCardTitle,
  CarouselImage,
} from "./Gallery.styles";

import sopanaSangeetham from "../../assets/images/gallery/sopana-sangeetham.png";
import dramaStage from "../../assets/images/gallery/drama-stage.png";
import koodiyattam from "../../assets/images/gallery/koodiyattam.png";
import fusionMusic from "../../assets/images/gallery/fusion-music.png";

// Org img
import img1 from "../../assets/akc-assets/img1.jpg";
import img2 from "../../assets/akc-assets/img2.jpg";
import img3 from "../../assets/akc-assets/img3.jpg";
import img4 from "../../assets/akc-assets/img4.jpg";

const galleryItems = [
  { id: 1, src: img1, titleKey: "gallery.stageCurtain" },
  { id: 2, src: img2, titleKey: "gallery.felicitation" },
  { id: 3, src: img3, titleKey: "gallery.inauguration" },
  { id: 4, src: img4, titleKey: "gallery.team" },
  { id: 5, src: sopanaSangeetham, titleKey: "gallery.sopanaSangeetham" },
  { id: 6, src: dramaStage, titleKey: "gallery.dramaStage" },
  { id: 7, src: koodiyattam, titleKey: "gallery.koodiyattam" },
  { id: 8, src: fusionMusic, titleKey: "gallery.fusionMusic" },
];

const Gallery = () => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const prevImage = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + galleryItems.length) % galleryItems.length,
    }));

  const nextImage = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % galleryItems.length,
    }));

  return (
    <GalleryWrapper bgImage={galleryBgImage}>
      <CarouselSection>
        <SectionTitle>{t("gallery.title")}</SectionTitle>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation
          style={{ width: "100%", paddingBottom: "48px" }}
        >
          {galleryItems.map((item, idx) => (
            <SwiperSlide
              key={item.id}
              style={{
                width: "60%",
                maxWidth: "700px",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => openLightbox(idx)}
            >
              <CarouselImage src={item.src} alt={t(item.titleKey)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselSection>

      <GridSection>
        <SectionTitle>{t("gallery.gridTitle")}</SectionTitle>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: "20px",
            width: "100%",
            maxWidth: "1200px",
            px: 2,
          }}
        >
          {galleryItems.map((item, idx) => (
            <GridCard key={item.id} onClick={() => openLightbox(idx)}>
              <GridImage src={item.src} alt={t(item.titleKey)} />
              <GridOverlay>
                <GridCardTitle>{t(item.titleKey)}</GridCardTitle>
              </GridOverlay>
            </GridCard>
          ))}
        </Box>
      </GridSection>

      <Dialog
        open={lightbox.open}
        onClose={closeLightbox}
        maxWidth={false}
        PaperProps={{
          sx: {
            background: "rgba(0,0,0,0.95)",
            boxShadow: "none",
            maxWidth: "90vw",
            maxHeight: "90vh",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
          },
        }}
        slotProps={{
          backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.85)" } },
        }}
      >
        <IconButton
          onClick={closeLightbox}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>
        <IconButton
          onClick={prevImage}
          sx={{
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            zIndex: 2,
            bgcolor: "rgba(0,0,0,0.4)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={nextImage}
          sx={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            zIndex: 2,
            bgcolor: "rgba(0,0,0,0.4)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        {lightbox.open && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={galleryItems[lightbox.index].src}
              alt={t(galleryItems[lightbox.index].titleKey)}
              style={{
                maxWidth: "85vw",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
            <Typography
              sx={{
                color: "white",
                mt: 2,
                mb: 1,
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {t(galleryItems[lightbox.index].titleKey)}
            </Typography>
          </Box>
        )}
      </Dialog>
    </GalleryWrapper>
  );
};

export default Gallery;
