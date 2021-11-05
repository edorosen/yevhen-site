import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Wrapper, H1, P, Paginator } from "../pagesStyles";
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
                <Paginator>
                    <ul>
                        <li>
                            <Link to="/Periodpress">&#8592;{t("paginator.prev")}</Link>
                        </li>
                        <li>
                            <Link to="/mebel">{t("paginator.next")}&#8594;</Link>
                        </li>
                    </ul>
                </Paginator>
            </Wrapper>
        </>
    )
};

export default DveriService;