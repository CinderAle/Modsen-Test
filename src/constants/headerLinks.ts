import routes from './routes';

export type HeaderLink = {
    path: string;
    name: string;
};

export const headerLinks: HeaderLink[] = [
    {
        path: routes.HOME_PAGE,
        name: 'Home',
    },
];
