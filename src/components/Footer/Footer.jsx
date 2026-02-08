import { useTranslation } from "react-i18next";
import { FooterContainer, CopyrightText } from "./Footer.styles";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <FooterContainer component="footer">
      <CopyrightText>
        {t("footer.copyright", { year })}
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
