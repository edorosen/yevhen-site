import CookieConsent from 'react-cookie-consent';
import { useTranslation } from "react-i18next";
import '../../../assets/i18n';
import { CookiesDiv } from '../styles.js';
import CookImg from '../../../assets/cookies.png';

const Cookies = () => {

	const { t } = useTranslation();

	return (
		<CookieConsent
			debug={true}
			location="bottom"
			style={{alignItems: 'center', justifyContent: 'center'}}
			buttonStyle={{backgroundColor: '#ff014f', color: '#fff'}}
			buttonText={t("cookies.button")}
			expires={30}
		>
			<CookiesDiv>
				<img src={CookImg} alt="cookie" />
				<p>{t("cookies.text")}</p>
			</CookiesDiv>
		</CookieConsent>
	)
};

export default Cookies;