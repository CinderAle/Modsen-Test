import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '@/assets/svg/recipeLogo.svg';
import { headerLinks } from '@/constants/headerLinks';

import { HeaderBlock, HeaderNav, LogoButtonContainer, MenuButton, PageLink, RecipeHost, RecipeLogo } from './styles';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const filteredLinks = headerLinks.filter((link) => pathname != link.path);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLink = (path: string) => {
        navigate(path);
    };

    return (
        <HeaderBlock>
            <HeaderNav>
                <LogoButtonContainer>
                    <RecipeHost>
                        <RecipeLogo src={Logo} />
                        Modsen recipe
                    </RecipeHost>
                    {filteredLinks.length > 0 && <MenuButton menuOpen={menuOpen} onClick={handleClick} />}
                </LogoButtonContainer>
                {filteredLinks.map((link) => (
                    <PageLink
                        key={link.name}
                        onClick={() => {
                            handleLink(link.path);
                        }}
                        $menuOpen={menuOpen}
                    >
                        {link.name}
                    </PageLink>
                ))}
            </HeaderNav>
        </HeaderBlock>
    );
};

export default Header;
