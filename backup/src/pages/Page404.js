import { Link as RouteLink } from "react-router-dom";
// chakra
import { ChakraProvider, Heading, Box, Container, Image, Button, Text } from '@chakra-ui/react'
import theme from '../themes';
import '../themes/styles.css';
// icons
import Logo from '../assets/lucacarrozzo-logo.svg';

const Page404 = () => {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Box bg='brand.50'>
        <Container p={10}>
          <Box margin="auto" width="132px" mb={5}>
            <Image
              
              htmlWidth="132px"
              htmlHeight="60px"
              objectFit='fit'          
              src={Logo}
            />
          </Box>
          <Heading as="h1" size="2xl" mb={5} align="center">
            Oops! Page not found.      
          </Heading>
          <Text as="div" fontSize="xl" align="center">
            Our team is on the case to track it down. In the meantime, take a breather and enjoy a virtual cup of tea. We'll have things sorted in a jiffy!      
          </Text>
          <Box textAlign="center" mt={6} mb={10}>
            <Button as={RouteLink} to="/" colorScheme='black' variant='outline'>
              back to home page
            </Button>          
          </Box>
        </Container>      
      </Box>
    </ChakraProvider>  
  );
}

export default Page404;