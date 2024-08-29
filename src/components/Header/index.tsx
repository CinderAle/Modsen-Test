import { useState } from 'react';

import Logo from '@/assets/svg/recipeLogo.svg';
import { headerLinks } from '@/constants/headerLinks';
import { useLocationContext } from '@/hooks/useLocationContext';

import { HeaderBlock, HeaderNav, LogoButtonContainer, MenuButton, PageLink, RecipeHost, RecipeLogo } from './styles';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { path } = useLocationContext();
    const filteredLinks = headerLinks.filter((link) => path.endsWith(link.path));

    const handleClick = () => {
        setMenuOpen(!menuOpen);
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
                    <PageLink key={link.name} href={link.path} $menuOpen={menuOpen}>
                        {link.name}
                    </PageLink>
                ))}
            </HeaderNav>
        </HeaderBlock>
    );
};

export default Header;
