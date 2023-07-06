import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/common/ScrollToTop';
// routes
import Router from './routes';

// ----------------------------------------------------------------------

const App = () => {
  return (
    <HelmetProvider>   
      <BrowserRouter>
        <ScrollToTop />
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
