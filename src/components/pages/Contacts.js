import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Wrapper, ContactsWrap, H1, P, SocLinks } from "./pagesStyles";
import Wellcome from './Home/WellcomeText/WellcomeDiv';
import { useTranslation } from "react-i18next";
import '../../assets/i18n';
import FB from '../../assets/facebook.png';
import IN from '../../assets/linkedin.png';
import PDF from '../../assets/pdf.png';

const Contacts = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("contacts.title.page")}</title>
                <meta name="description" content={t("contacts.meta.description")} />
                <meta name="keywords" content={t("contacts.meta.keywords")} />
            </Helmet>
            <Wellcome />
            <Wrapper>
                <ContactsWrap>
                    <H1>{t("contacts.title.head")}</H1>
                    <P>{t("contacts.content.p1")}</P>
                    <P>{t("contacts.content.p2")}</P>
                    <SocLinks>
                        <a href="https://www.facebook.com/profile.php?id=100019509077567"><img src={FB} alt="fb" /></a>
                        <a href="https://www.linkedin.com/in/edoroshen-%CF%82/"><img src={IN} alt="in" /></a>
                    </SocLinks>
                    <SocLinks>
                        <P>{t("contacts.content.p3")}</P>
                        <Link to="/files/Doroshenko_CV.pdf" target="_blank" download><img src={PDF} alt="pdf" /></Link>
                    </SocLinks>
                </ContactsWrap>
            </Wrapper>
        </>
    )
};

export default Contacts;