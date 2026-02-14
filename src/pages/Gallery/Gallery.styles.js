import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const GalleryWrapper = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "80px",
  paddingBottom: "60px",
  background: "linear-gradient(180deg, var(--color-primary-darkest) 0%, var(--color-dark) 15%, var(--color-dark) 100%)",
}));

export const CarouselSection = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1400px",
  marginBottom: "60px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& .swiper-button-next, & .swiper-button-prev": {
    color: "var(--color-white)",
    opacity: 0.7,
    transition: "opacity 0.2s",
    "&:hover": {
      opacity: 1,
    },
    "&::after": {
      fontSize: "24px",
    },
  },

  "& .swiper-pagination-bullet": {
    background: "var(--color-grey-500)",
    opacity: 0.5,
    width: "10px",
    height: "10px",
    transition: "all 0.3s",
  },
  "& .swiper-pagination-bullet-active": {
    background: "var(--color-primary)",
    opacity: 1,
    width: "28px",
    borderRadius: "5px",
  },

  "& .swiper-slide": {
    transition: "transform 0.4s ease, opacity 0.4s ease",
    opacity: 0.4,
    transform: "scale(0.85)",
  },
  "& .swiper-slide-active": {
    opacity: 1,
    transform: "scale(1)",
  },
}));

export const SectionTitle = styled(Typography)(() => ({
  color: "var(--color-white)",
  fontSize: "28px",
  fontWeight: 700,
  marginBottom: "32px",
  textAlign: "center",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: "60px",
    height: "3px",
    background: "var(--color-primary)",
    margin: "12px auto 0",
    borderRadius: "2px",
  },

  "@media (max-width: 600px)": {
    fontSize: "22px",
    marginBottom: "24px",
  },
}));

export const GridSection = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const GridCard = styled(Box)(() => ({
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  aspectRatio: "4/3",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 30px rgba(195, 17, 12, 0.25)",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
  "&:hover > div": {
    opacity: 1,
  },
}));

export const GridImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 0.4s ease",
}));

export const GridOverlay = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(transparent 40%, rgba(0,0,0,0.85) 100%)",
  display: "flex",
  alignItems: "flex-end",
  padding: "16px",
  opacity: 0,
  transition: "opacity 0.3s ease",
}));

export const GridCardTitle = styled(Typography)(() => ({
  color: "var(--color-white)",
  fontSize: "15px",
  fontWeight: 600,
  textShadow: "0 1px 3px rgba(0,0,0,0.5)",
}));
