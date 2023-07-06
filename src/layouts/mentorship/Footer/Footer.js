import { useLocation } from 'react-router-dom';
// chakra
import { Box, Heading, HStack, Button, Circle, Icon, Link } from '@chakra-ui/react';
// icons
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6";
// components
import MentorBlock from '../../../components/common/MentorBlock/MentorBlock';

// ----------------------------------------------------------------------

const Footer = () => {
  const { pathname } = useLocation();

  return(
    <Box 
      bg="brand.900" 
      pb={12} 
      px={{ base: '12px', md: '24px' }}
      pt={pathname !== '/mentorship' ? 46 : 0}
    >
      <Box position="relative" top={pathname === '/mentorship' ? '-50px' : null} >

        {pathname === '/mentorship' && <MentorBlock />}

        <Box color="white" textAlign="center">
          <Heading 
            as="div" 
            size="lg" 
            maxWidth={600} 
            margin="auto"
            pt={pathname === '/mentorship' ? 46 : 0} 
          >
            Need freelance help for your product idea? Let's connect and make it happen!
          </Heading>
          <HStack 
            spacing='24px' 
            maxWidth={210} 
            margin="auto" 
            mt={30}
            align='center'
            justifyContent={'center'}
          >
            <Circle w='50px' h='50px' border='2px' borderColor='white' as={Link} href="https://www.linkedin.com/in/lucacarrozzo/?locale=en_US" target="_blank" isExternal>
              <Icon as={FaLinkedinIn} />
            </Circle>
            <Circle w='50px' h='50px' border='2px' borderColor='white' as={Link} href="https://twitter.com/carrozzo_lc" target="_blank" isExternal>
              <Icon as={FaTwitter} />
            </Circle>
            <Circle w='50px' h='50px' border='2px' borderColor='white' as={Link} href="https://github.com/carrozzo-lc" target="_blank" isExternal>
              <Icon as={FaGithub} />
            </Circle>
          </HStack>
          <Button
            as={Link}
            leftIcon={<EmailIcon />} 
            variant='solid' 
            sx={{ background: 'white' }}
            href="mailto:me@lucacarrozzo.com"
            mt="24px"
            isExternal
          >
            me@lucacarrozzo.com
          </Button> 
        </Box>

      </Box>         
    </Box>
  )
};

export default Footer;