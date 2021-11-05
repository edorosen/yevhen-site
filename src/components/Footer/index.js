import { Wrapper, H1 } from './styles';
import Cookies from './cookies/Cookies';
import './styles.css';

const Footer = () => {

    let newDate = new Date()
    let year = newDate.getFullYear();

    return (
        <Wrapper>
            <Cookies />
            <H1>Created by Yevhen Doroshenko || {year}</H1>
        </Wrapper>
    )
};

export default Footer;