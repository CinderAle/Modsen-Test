import { Navigate, Route, Routes } from 'react-router-dom';

import paths from '@/constants/routes';
import { publicRoutes } from '@/routes';

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((route) => (
                <Route path={route.path} Component={route.component} />
            ))}
            <Route path="" element={<Navigate to={paths.HOME_PAGE} />} />
            <Route
                path="*"
                Component={() => {
                    throw new Error('Page not found');
                }}
            />
        </Routes>
    );
};

export default AppRouter;
