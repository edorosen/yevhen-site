import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Wellcome from './WellcomeText/WellcomeDiv';

import { H1 } from "../pagesStyles";
import { Content, CardChar, PortfolioCard, CardOverlay } from "./styles";
import Period from '../../../assets/periodPress1.png';
import Dveri from '../../../assets/dveri-servise.png';
import Mebel from '../../../assets/mebli-24.png';
import Testds from '../../../assets/test-ds.png';
import { useTranslation } from "react-i18next";
import '../../../assets/i18n';

const Home = () => {

    const { t } = useTranslation();

    return (
        <div>
            <Helmet>
                <title>{t("home.title.page")}</title>
                <meta name="description" content={t("home.meta.description")} />
                <meta name="keywords" content={t("home.meta.keywords")} />
            </Helmet>
            <Wellcome />
            <H1>{t("home.title.head")}</H1>
            <Content>
                <CardChar>
                    <a href="http://test.geronimo.zzz.com.ua/" target="_blank" rel="noreferrer">{t("home.article.test-ds-title")}</a>
                    <PortfolioCard>

                        <img src={Testds} alt="testds" />

                        <CardOverlay>
                            <ul>
                                <li>
                                    <Link to="/test-ds">{t("home.article.selector")}</Link>
                                </li>
                            </ul>
                        </CardOverlay>
                    </PortfolioCard>
                </CardChar>
                <CardChar>
                    <a href="http://periodpress.onu.edu.ua/" target="_blank" rel="noreferrer">{t("home.article.period-title")}</a>
                    <PortfolioCard>

                        <img src={Period} alt="Period" />
                        <CardOverlay>
                            <ul>
                                <li>
                                    <Link to="/Periodpress">{t("home.article.selector")}</Link>
                                </li>
                            </ul>
                        </CardOverlay>
                    </PortfolioCard>
                </CardChar>
                <CardChar>
                    <a href="https://dveri-service.com.ua/" target="_blank" rel="noreferrer">{t("home.article.dveri-title")}</a>
                    <PortfolioCard>

                        <img src={Dveri} alt="Dveri" />

                        <CardOverlay>
                            <ul>
                                <li>
                                    <Link to="/DveriService">{t("home.article.selector")}</Link>
                                </li>
                            </ul>
                        </CardOverlay>
                    </PortfolioCard>
                </CardChar>
                <CardChar>
                    <a href="https://mebel-24.com.ua/" target="_blank" rel="noreferrer">{t("home.article.mebel-title")}</a>
                    <PortfolioCard>

                        <img src={Mebel} alt="Mebel" />

                        <CardOverlay>
                            <ul>
                                <li>
                                    <Link to="/mebel">{t("home.article.selector")}</Link>
                                </li>
                            </ul>
                        </CardOverlay>
                    </PortfolioCard>
                </CardChar>
            </Content>
        </div>
    )
};

export default Home;