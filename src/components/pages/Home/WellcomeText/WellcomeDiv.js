import { WellcomeDiv } from './styles';
import { useTranslation } from "react-i18next";
import '../../../../assets/i18n';

const Wellcome = () => {
    const { t } = useTranslation();

    return (
        <WellcomeDiv>
            <p>{t("home.wellcome-text")}
                <br />
                <a href="http://geronimo.zzz.com.ua">geronimo.zzz.com.ua</a>
            </p>
        </WellcomeDiv>
    )
};

export default Wellcome;