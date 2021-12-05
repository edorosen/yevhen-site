import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Wrapper, H1, P, Paginator } from "../pagesStyles";
import Wellcome from '../Home/WellcomeText/WellcomeDiv';
import { useTranslation } from "react-i18next";
import '../../../assets/i18n';

const TestDs = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("test-ds.title.page")}</title>
                <meta name="description" content={t("test-ds.meta.description")} />
                <meta name="keywords" content={t("test-ds.meta.keywords")} />
            </Helmet>
            <Wellcome />
            <Wrapper>
                <H1>{t("test-ds.title.head")}</H1>
                <P>{t("test-ds.content.p1")}</P>

                <P>{t("test-ds.content.p2")}</P>

                <P>{t("test-ds.content.p3")}<a href="https://www.figma.com/file/8POoiEO1lfUoOG8258rwbX/Devs?node-id=0:1" target="_blank" rel="noreferrer" style={{color: "#fff"}}>https://www.figma.com/file/8POoiEO1lfUoOG8258rwbX/Devs?node-id=0:1(Якщо, звісно він буде доступний)</a></P>

                <P>{t("test-ds.content.p4")}</P>

                <P>{t("test-ds.content.p5")}</P>

                <P>{t("test-ds.content.p6")}</P>

                <P>{t("test-ds.content.p7")}<a href="http://test.geronimo.zzz.com.ua/" target="_blank" rel="noreferrer" style={{color: "#fff"}}>http://test.geronimo.zzz.com.ua/</a></P>
                <Paginator>
                    <ul>
                        <li>
                            <Link to="/mebel">&#8592;{t("paginator.prev")}</Link>
                        </li>
                    </ul>
                </Paginator>
            </Wrapper>
        </>
    )
};

export default TestDs;