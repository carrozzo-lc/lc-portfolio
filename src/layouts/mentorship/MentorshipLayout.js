import { Outlet } from 'react-router-dom';
// chakra
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../themes';
import '../../themes/styles.css';
import { Box } from '@chakra-ui/react';
// components
import Header from './Header';
import Footer from './Footer';

// ----------------------------------------------------------------------

export default function MentorshipLayout() {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Box bg='brand.50'>
        <Header />
        <Outlet />
        <Footer />   
      </Box>
    </ChakraProvider>
  );
}