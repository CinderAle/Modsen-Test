import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import AppRouter from './components/AppRouter';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Header from './components/Header';
import { LocationContext } from './hooks/useLocationContext';
import { MainContainer } from './styles/mainContainer';
import { theme } from './styles/theme';

function App() {
    const [path, setPath] = useState(window.location.pathname);
    return (
        <ThemeProvider theme={theme}>
            <LocationContext.Provider value={{ path, setPath }}>
                <Header />
                <MainContainer>
                    <ErrorBoundary>
                        <AppRouter />
                    </ErrorBoundary>
                </MainContainer>
                <Footer />
            </LocationContext.Provider>
        </ThemeProvider>
    );
}

export default App;
