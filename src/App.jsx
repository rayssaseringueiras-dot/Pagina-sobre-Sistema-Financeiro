import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Conversor from './pages/conversor';

// 1. Configurando o Tema Escuro Monocromático (MUI)
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#191426', // Fundo principal (--bg-base)
      paper: '#372D4d',   // Fundo de cards/menus (--bg-surface)
    },
    divider: '#524666',   // Bordas e separadores (--ui-border)
    primary: {
      main: "#706282",    // Detalhes e hovers (--ui-accent)
    },
    text: {
      primary: '#F3F0F5', // Texto de alto contraste
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contato" element={<Contato />} />
            <Route path="conversor" element={<Conversor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;