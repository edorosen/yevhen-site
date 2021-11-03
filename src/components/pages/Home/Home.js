import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Wellcome from './WellcomeText/WellcomeDiv';

import {H1} from "../pagesStyles";
import { Content, CardChar, PortfolioCard, CardOverlay } from "./styles";
import University from '../../../assets/university.jpg';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <Wellcome />
            <H1>Portfolio:</H1>
            <Content>
                <CardChar>
                        <PortfolioCard>

                            <img src={University} alt="uni" />

                            <CardOverlay>
                                <ul>
                                    <li>
                                        <Link to="/Periodpress">Дізнатись більше</Link>
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
                                        <Link to="/DveriService">Дізнатись більше</Link>
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
                                    <Link to="/mebel">Дізнатись більше</Link>
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