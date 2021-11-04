import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Wellcome from './WellcomeText/WellcomeDiv';

import { H1 } from "../pagesStyles";
import { Content, CardChar, PortfolioCard, CardOverlay } from "./styles";
import University from '../../../assets/university.jpg';
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
                    <PortfolioCard>

                        <img src={University} alt="uni" />

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
                    <PortfolioCard>

                        <img src={University} alt="uni" />

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
                    <PortfolioCard>

                        <img src={University} alt="uni" />

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