import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Wrapper, H1, P, Paginator } from "../pagesStyles";
import Wellcome from '../Home/WellcomeText/WellcomeDiv';
import { useTranslation } from "react-i18next";
import '../../../assets/i18n';

const Periodpress = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("periodpress.title.page")}</title>
                <meta name="description" content={t("periodpress.meta.description")} />
                <meta name="keywords" content={t("periodpress.meta.keywords")} />
            </Helmet>
            <Wellcome />
            <Wrapper>
                <H1>{t("periodpress.title.head")}</H1>
                <P>{t("periodpress.content.p1")}</P>

                <P>{t("periodpress.content.p2")}</P>

                <P>{t("periodpress.content.p3")}</P>

                <P>{t("periodpress.content.p4")}</P>

                <P>{t("periodpress.content.p5")}</P>

                <P>{t("periodpress.content.p6")}</P>
                <Paginator>
                    <ul>
                        <li>
                            <Link to="/DveriService">{t("paginator.next")}&#8594;</Link>
                        </li>
                    </ul>
                </Paginator>
            </Wrapper>
        </>
    )
};

export default Periodpress;