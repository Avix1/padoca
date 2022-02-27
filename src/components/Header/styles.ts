import styled from 'styled-components';
import logo from '../../../public/icons/logo.jpg';

export const HeaderPage = styled.header`
    width: 68.75rem;
    height: 11vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
`;

export const LogoPage = styled.img.attrs({ src: `${logo}` })`
    width: 11.625rem;
    height: auto; 
`

export const NavPage = styled.nav`
    width: 30.5rem;
    height: 2.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const NavLink = styled.a`
    color: ${props => props.theme.colors.primary};
    font-size: 1rem;
`
