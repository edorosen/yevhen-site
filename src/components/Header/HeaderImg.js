import Avatar from '../../assets/avatar2.jpg';
import { TopImg, TopP, HeadImg } from './styles';

const HeaderImg = () => (
    <TopImg>
        
            <HeadImg src={Avatar} alt="logo" />
            <TopP>Yevhen Doroshenko</TopP>
       
    </TopImg>
);

export default HeaderImg;