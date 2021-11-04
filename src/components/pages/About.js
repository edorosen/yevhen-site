import { Helmet } from "react-helmet";
import { Wrapper, H1, P } from "./pagesStyles";
import Wellcome from './Home/WellcomeText/WellcomeDiv';
import Gallery from "./gallery/gallery";
import { useTranslation } from "react-i18next";
import '../../assets/i18n';

const About = () => {

    const { t } = useTranslation();

    return (
        <div>
            <Helmet>
                <title>{t("about.title.page")}</title>
                <meta name="description" content={t("about.meta.description")} />
                <meta name="keywords" content={t("about.meta.keywords")} />
            </Helmet>
            <Wellcome />
            <Wrapper>
                <H1>{t("about.title.head")}</H1>
                <P>{t("about.content.p1")}</P>
                <H1>{t("about.title.head2")}</H1>
                <P>{t("about.content.p2")}</P>
                <P>{t("about.content.p3")}</P>
                <P>{t("about.content.p4")}</P>
                <P>{t("about.content.p5")}</P>
                <Gallery />
            </Wrapper>
        </div>
    )
};

export default About;