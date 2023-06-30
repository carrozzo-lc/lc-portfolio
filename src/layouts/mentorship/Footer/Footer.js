// chakra
import {
  Box,
  Heading,
  HStack,
  Button,
  Circle,
  Icon
} from '@chakra-ui/react';
// icons
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6";

// ----------------------------------------------------------------------

const Footer = () => {
  return(
    <Box bg="brand.900" margin="auto" textAlign="center" pt={46} pb={94} px="24px">
      <Heading 
        as="div" 
        size="lg" 
        maxWidth={600} 
        margin="auto"
      >Need freelance help for your product idea? Let's connect and make it happen!</Heading>
      <HStack 
        spacing='24px' 
        maxWidth={210} 
        margin="auto" 
        mt={30}
        align='center'
        justifyContent={'center'}
      >
        <Circle w='50px' h='50px' border='2px' borderColor='white' as="a" href="#" target="_blank">
          <Icon as={FaLinkedinIn} />
        </Circle>
        <Circle w='50px' h='50px' border='2px' borderColor='white' as="a" href="#" target="_blank">
          <Icon as={FaTwitter} />
        </Circle>
        <Circle w='50px' h='50px' border='2px' borderColor='white' as="a" href="#" target="_blank">
          <Icon as={FaGithub} />
        </Circle>
      </HStack>
      <Button
        as="a"
        leftIcon={<EmailIcon />} 
        variant='solid' 
        sx={{ background: 'white' }}
        href="mailto:me@lucacarrozzo.com"
        mt={'24px'}
      >
        me@lucacarrozzo.com
      </Button>          
    </Box>
  )
};

export default Footer;