import { LangDiv, LangLink } from './styles';
import { useTranslation } from 'react-i18next';
import '../../assets/i18n';

const Lang = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <LangDiv>
            <LangLink href="#" onClick={() => changeLanguage("en")}>EN</LangLink>
            <LangLink href="#" onClick={() => changeLanguage("ua")}>UA</LangLink>
        </LangDiv>
    );
};

export default Lang;