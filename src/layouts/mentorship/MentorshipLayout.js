import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../themes';
import '../../themes/styles.css';
//components
import Header from './Header';

// ----------------------------------------------------------------------

export default function MentorshipLayout() {

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Outlet />
    </ChakraProvider>
  );
}