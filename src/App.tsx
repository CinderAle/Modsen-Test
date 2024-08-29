import { ThemeProvider } from 'styled-components';

import AppRouter from './components/AppRouter';
import { theme } from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
