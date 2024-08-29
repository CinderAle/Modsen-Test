import routes from './routes';

export type HeaderLink = {
    path: string;
    name: string;
};

const DEPLOY_PATH = 'Modsen-Test/#';

export const headerLinks: HeaderLink[] = [
    {
        path: DEPLOY_PATH + routes.HOME_PAGE,
        name: 'Home',
    },
];
