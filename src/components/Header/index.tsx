import { HeaderPage, NavPage, NavLink, LogoPage } from './styles';

const Header = () => {
    return (
        <>
        <HeaderPage>
            <LogoPage />
            <NavPage>
                <NavLink>Home</NavLink>
                <NavLink>Menu</NavLink>
                <NavLink>Contact</NavLink>
                <NavLink>About us</NavLink>
            </NavPage>
        </HeaderPage>

        </>
    )

}

export default Header;
