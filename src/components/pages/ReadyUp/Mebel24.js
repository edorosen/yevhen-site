import { Helmet } from "react-helmet";
import { Wrapper, H1, P } from "../pagesStyles";
import Wellcome from '../Home/WellcomeText/WellcomeDiv';
import { useTranslation } from "react-i18next";
import '../../../assets/i18n';

const Mebel24 = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("mebel.title.page")}</title>
                <meta name="description" content={t("mebel.meta.description")} />
                <meta name="keywords" content={t("mebel.meta.keywords")} />
            </Helmet>
            <Wellcome />
            <Wrapper>
                <H1>{t("mebel.title.head")}</H1>
                <P>{t("mebel.content.p1")}</P>
                <P>{t("mebel.content.p2")}</P>
                <P>{t("mebel.content.p3")}</P>
                <P>{t("mebel.content.p4")}</P>
                <P>{t("mebel.content.p5")}</P>
            </Wrapper>
        </>
    )
};

export default Mebel24;