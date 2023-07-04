// chakra
import {
  Box,
  Heading,
  HStack,
  Button,
  Circle,
  Icon,
  Link
} from '@chakra-ui/react';
// icons
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6";
// components
import MentorBlock from '../../../components/common/MentorBlock/MentorBlock';

// ----------------------------------------------------------------------

const Footer = () => {
  return(
    <Box 
      bg="brand.900" 
      pb={12} 
      px="24px" 
    >
      <Box position="relative" top="-50px" >

        <MentorBlock />

        <Box color="white" textAlign="center">
          <Heading 
            as="div" 
            size="lg" 
            maxWidth={600} 
            margin="auto"
            pt={46} 
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
            <Circle w='50px' h='50px' border='2px' borderColor='white' as={Link} href="#" target="_blank" isExternal>
              <Icon as={FaLinkedinIn} />
            </Circle>
            <Circle w='50px' h='50px' border='2px' borderColor='white' as={Link} href="#" target="_blank" isExternal>
              <Icon as={FaTwitter} />
            </Circle>
            <Circle w='50px' h='50px' border='2px' borderColor='white' as={Link} href="#" target="_blank" isExternal>
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