import paths from '@/constants/routes';
import HomePage from '@/pages/HomePage';
import RecipePage from '@/pages/RecipePage';

export const publicRoutes = [
    {
        path: paths.HOME_PAGE,
        component: HomePage,
    },
    {
        path: `${paths.RECIPE_PAGE}/:id`,
        component: RecipePage,
    },
];
