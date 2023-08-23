import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { Router } from './routes/routes';
import { useGameStore } from './store/games';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

function App() {
  const themes = useGameStore(state => state.theme);

  const colorTheme = themes === 'dark' ? light : dark;

  return (
    <ThemeProvider theme={colorTheme}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

export default App;
