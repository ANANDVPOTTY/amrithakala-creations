import { useTranslation } from "react-i18next";
import bigLogo from "../../assets/logos/logo.png";
import {
  FooterContainer,
  LogoSection,
  FooterLogo,
  CopyrightText,
} from "./Footer.styles";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <FooterContainer component="footer">
      <LogoSection
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FooterLogo src={bigLogo} alt={t("footer.logoAlt")} />
      </LogoSection>

      <CopyrightText>{t("footer.copyright", { year })}</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
