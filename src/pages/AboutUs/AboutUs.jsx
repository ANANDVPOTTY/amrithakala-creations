import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FaSpotify, FaApple } from "react-icons/fa";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import {
  AboutUsWrapper,
  HeroTitle,
  AboutSection,
  AboutImageBox,
  AboutImagePrimary,
  AboutImageSecondary,
  AboutContent,
  AboutHeading,
  AboutText,
  AboutButton,
  ArtFormsSection,
  SectionTitle,
  ArtFormsGrid,
  ArtFormCard,
  ArtFormImage,
  ArtFormOverlay,
  ArtFormTitle,
  StatsSection,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  CtaBanner,
  CtaContent,
  CtaHeading,
  CtaButton,
  CtaVideo,
  MuteToggle,
  ContactSection,
  ContactGrid,
  ContactCard,
  ContactLabel,
  ContactText,
  ContactPhoneList,
  ContactPhone,
  SocialLinks,
  SocialLink,
  MapWrapper,
} from "./AboutUs.styles";

import galleryBgImage from "../../assets/backgrounds/gallery-bg.jpg";
import pic2 from "../../assets/owner/pic2.jpg";
import pic5 from "../../assets/owner/pic5.jpg";
import natakamImg from "../../assets/posters/natakam.png";
import ctaVideo from "../../assets/videos/cta-video.mp4";

import kathakali from "../../assets/gallery/kathakali.png";
import chendaMelam from "../../assets/gallery/chenda-melam.png";
import mohiniyattam from "../../assets/gallery/mohiniyattam.png";
import theyyam from "../../assets/gallery/theyyam.png";
import sopanaSangeetham from "../../assets/gallery/sopana-sangeetham.png";
import dramaStage from "../../assets/gallery/drama-stage.png";
import koodiyattam from "../../assets/gallery/koodiyattam.png";
import fusionMusic from "../../assets/gallery/fusion-music.png";

const artForms = [
  { id: 1, src: kathakali, titleKey: "gallery.kathakali" },
  { id: 2, src: chendaMelam, titleKey: "gallery.chendaMelam" },
  { id: 3, src: mohiniyattam, titleKey: "gallery.mohiniyattam" },
  { id: 4, src: theyyam, titleKey: "gallery.theyyam" },
  { id: 5, src: sopanaSangeetham, titleKey: "gallery.sopanaSangeetham" },
  { id: 6, src: dramaStage, titleKey: "gallery.dramaStage" },
  { id: 7, src: koodiyattam, titleKey: "gallery.koodiyattam" },
  { id: 8, src: fusionMusic, titleKey: "gallery.fusionMusic" },
];

const stats = [
  { id: 1, value: "20+", labelKey: "aboutUs.statsYears" },
  { id: 2, value: "1,000+", labelKey: "aboutUs.statsPerformances" },
  { id: 3, value: "8+", labelKey: "aboutUs.statsArtForms" },
  { id: 4, value: "500+", labelKey: "aboutUs.statsStudents" },
];

const AboutUs = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <AboutUsWrapper bgImage={galleryBgImage}>
      <HeroTitle>{t("aboutUs.title")}</HeroTitle>

      {/* ── About Section ── */}
      <AboutSection>
        <AboutImageBox>
          <AboutImagePrimary src={pic5} alt={t("aboutUs.imageAlt")} />
          <AboutImageSecondary src={pic2} alt={t("aboutUs.imageAlt")} />
        </AboutImageBox>

        <AboutContent>
          <AboutHeading>{t("aboutUs.aboutHeading")}</AboutHeading>
          <AboutText>{t("aboutUs.aboutText")}</AboutText>

          <AboutButton component={Link} to="/bookings">
            {t("aboutUs.bookNow")}
          </AboutButton>
        </AboutContent>
      </AboutSection>

      {/* ── Art Forms Section ── */}
      <ArtFormsSection>
        <SectionTitle>{t("aboutUs.artFormsTitle")}</SectionTitle>

        <ArtFormsGrid>
          {artForms.map((item) => (
            <ArtFormCard key={item.id}>
              <ArtFormImage src={item.src} alt={t(item.titleKey)} />
              <ArtFormOverlay>
                <ArtFormTitle>{t(item.titleKey)}</ArtFormTitle>
              </ArtFormOverlay>
            </ArtFormCard>
          ))}
        </ArtFormsGrid>
      </ArtFormsSection>

      {/* ── Stats Section ── */}
      <StatsSection>
        <StatsGrid>
          {stats.map((stat) => (
            <StatCard key={stat.id}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{t(stat.labelKey)}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>

      {/* ── CTA Banner ── */}
      <CtaBanner>
        <CtaHeading>{t("aboutUs.ctaHeading")}</CtaHeading>

        <CtaContent bgImage={natakamImg}>
          <CtaVideo
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            src={ctaVideo}
          />
          <MuteToggle onClick={toggleMute}>
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </MuteToggle>
          <CtaContent>
            <CtaButton component={Link} to="/bookings">
              {t("aboutUs.ctaButton")}
            </CtaButton>
          </CtaContent>
        </CtaContent>
      </CtaBanner>

      {/* ── Contact Section ── */}
      <ContactSection>
        <SectionTitle>{t("aboutUs.contactTitle")}</SectionTitle>

        <ContactGrid>
          <ContactCard>
            <ContactLabel>{t("aboutUs.addressLabel")}</ContactLabel>
            <ContactText>{t("aboutUs.address")}</ContactText>

            <ContactLabel>{t("aboutUs.phoneLabel")}</ContactLabel>
            <ContactPhoneList>
              <ContactPhone href="tel:+918281254787">8281254787</ContactPhone>
              <ContactPhone href="tel:+918086199787">8086199787</ContactPhone>
              <ContactPhone href="tel:+917907972687">7907972687</ContactPhone>
            </ContactPhoneList>

            <SocialLinks>
              <SocialLink
                href="https://www.facebook.com/share/1ASXWwCaLb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/sivakumaramrithakala?igsh=MTdqY2tneTA3bDl0cg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </SocialLink>
              <SocialLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </SocialLink>
              <SocialLink
                href="https://open.spotify.com/artist/5MIiN99jP17ZYbq8wPmUfp?si=rMLsZ3nDSBuM2rd1Fz1UpA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSpotify />
              </SocialLink>
              <SocialLink
                href="https://music.apple.com/in/artist/sivakumar-amrithakala/1535794331"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaApple />
              </SocialLink>
              <SocialLink
                href="https://www.saavn.com/s/artist/sivakumar-amrithakala-albums/CG2ApemPqdQ_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MusicNoteIcon />
              </SocialLink>
            </SocialLinks>
          </ContactCard>

          <MapWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.5!2d76.5741!3d9.3816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0621ec0e0e0001%3A0x1234567890abcdef!2sThottabhagam%2C%20Thiruvalla%2C%20Kerala%20689541!5e0!3m2!1sen!2sin!4v1700000000000"
              title={t("aboutUs.locationLabel")}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapWrapper>
        </ContactGrid>
      </ContactSection>
    </AboutUsWrapper>
  );
};

export default AboutUs;
