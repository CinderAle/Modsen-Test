import Logo from '@/assets/svg/recipeLogo.svg';
import paths from '@/constants/routes';

import { HeaderBlock, HeaderNav, PageLink, RecipeHost, RecipeLogo } from './styles';

const Header = () => {
    return (
        <HeaderBlock>
            <RecipeHost>
                <RecipeLogo src={Logo} />
                Modsen recipe
            </RecipeHost>
            <HeaderNav>
                <PageLink href={paths.HOME_PAGE}>Home</PageLink>
            </HeaderNav>
        </HeaderBlock>
    );
};

export default Header;
