import { Helmet } from "react-helmet";
import { Wrapper, H1, P } from "./pagesStyles";
import Wellcome from './Home/WellcomeText/WellcomeDiv';
import { useTranslation } from "react-i18next";
import '../../assets/i18n';

const Contacts = () => {

    const { t } = useTranslation();

    return (
        <div>
            <Helmet>
                <title>{t("contacts.title.page")}</title>
                <meta name="description" content={t("contacts.meta.description")} />
                <meta name="keywords" content={t("contacts.meta.keywords")} />
            </Helmet>
            <Wellcome />
            <Wrapper>
                <H1>{t("contacts.title.head")}</H1>
                <P>{t("contacts.content.p1")}</P>
                <P>{t("contacts.content.p2")}</P>
                <P>{t("contacts.content.p3")}</P>
                <P>{t("contacts.content.p4")}</P>
            </Wrapper>
        </div>
    )
};

export default Contacts;