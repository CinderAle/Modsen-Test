import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import paths from '@/constants/routes';
import { publicRoutes } from '@/routes';
import { MainContainer } from '@/styles/mainContainer';

import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import Header from '../Header';

const AppRouter = () => {
    return (
        <HashRouter>
            <Header />
            <MainContainer>
                <ErrorBoundary>
                    <Routes>
                        {publicRoutes.map((route, index) => (
                            <Route key={index} path={route.path} Component={route.component} />
                        ))}
                        <Route path="" element={<Navigate to={paths.HOME_PAGE} />} />
                        <Route
                            path="*"
                            Component={() => {
                                throw new Error('Page not found');
                            }}
                        />
                    </Routes>
                </ErrorBoundary>
            </MainContainer>
            <Footer />
        </HashRouter>
    );
};

export default AppRouter;
