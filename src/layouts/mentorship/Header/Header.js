import { Link as RouteLink } from "react-router-dom";
// chakra
import {
  Flex,
  Heading,
  IconButton,
  Collapse,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
// components
import DesktopNavigation from '../nav/DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../nav/MobileNavigation/MobileNavigation';

// ----------------------------------------------------------------------

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        bg="brand.500"
        color="white"
        minH={'72px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="white"
        align={'center'}>

        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Heading
            as={RouteLink}
            to="/mentorship"
            size={{ base: 'md', lg: 'lg' }}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color="white">
            Mentorship Program
          </Heading>
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNavigation />
        </Flex>

        <Flex
          flex={{ base: 'none', md: 'flex' }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={ isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} /> }
            variant={'ghost'}
            sx={{
              color: 'white',
              '&:active': {
                background: 'none'
              }
            }}
            aria-label={'Toggle Navigation'}
          />
        </Flex>        
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNavigation />
      </Collapse>
    </>
  );
}

export default Header;