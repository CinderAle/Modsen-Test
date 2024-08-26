import Logo from '@/assets/svg/recipeLogo.svg';
import paths from '@/constants/routes';

const Header = () => {
    return (
        <header>
            <h1>
                <img src={Logo} />
                Modsen recipe
            </h1>
            <nav>
                <a href={paths.HOME_PAGE}>Home</a>
            </nav>
        </header>
    );
};

export default Header;
