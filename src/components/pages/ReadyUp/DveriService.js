import { Helmet } from "react-helmet";
import { Wrapper, H1, P } from "../pagesStyles";
import Wellcome from '../Home/WellcomeText/WellcomeDiv';
import { useTranslation } from "react-i18next";
import '../../../assets/i18n';

const DveriService = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("dveri.title.page")}</title>
                <meta name="description" content={t("dveri.meta.description")} />
                <meta name="keywords" content={t("dveri.meta.keywords")} />
            </Helmet>
            <Wellcome />
            <Wrapper>
                <H1>{t("dveri.title.head")}</H1>
                <P>{t("dveri.content.p1")}</P>
                <P>{t("dveri.content.p2")}</P>
                <P>{t("dveri.content.p3")}</P>
                <P>{t("dveri.content.p4")}</P>
            </Wrapper>
        </>
    )
};

export default DveriService;