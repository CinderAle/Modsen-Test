import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
