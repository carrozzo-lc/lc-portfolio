import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
// routes
import Router from './routes';

// ----------------------------------------------------------------------

const App = () => {
  return (  
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;
