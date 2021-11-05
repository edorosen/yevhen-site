import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
`;
Wrapper.displayName = 'Wrapper';

export const ContactsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
ContactsWrap.displayName = 'ContactsWrap';

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
H1.displayName = 'h1';

export const P = styled.p`
    color: #fff;
    text-indent: 20px;
`;
P.displayName = 'p';

export const SocLinks = styled.div`
    display: flex;
    justify-content: center;

    a{
        width: 30px;
        margin: 10px;
        img{
            width: 100%;
        }
    }
`;
SocLinks.displayName = 'SocLinks';

export const Paginator = styled.div`
    display: flex;
    width: 100%;
    border-top: 2px solid #fff;
    
    ul{
        display: flex;
        justify-content: space-around;
        width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        
        li{
            
            a{
                color: #fff;
                text-transform: uppercase;
                text-decoration: none;
            }
        }
    }
`;
Paginator.displayName = 'Paginator';