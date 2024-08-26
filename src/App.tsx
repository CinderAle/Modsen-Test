import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Header from './components/Header';
import { MainContainer } from './styles/mainContainer';

function App() {
    return (
        <>
            <Header />
            <MainContainer>
                <ErrorBoundary>
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </ErrorBoundary>
            </MainContainer>
            <Footer />
        </>
    );
}

export default App;
