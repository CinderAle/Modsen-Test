import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            <ErrorBoundary>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </ErrorBoundary>
            <Footer />
        </>
    );
}

export default App;
