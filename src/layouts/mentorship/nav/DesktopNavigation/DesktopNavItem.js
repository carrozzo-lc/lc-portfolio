import { Link as RouteLink } from "react-router-dom";
// chakra
import { Box, Link } from '@chakra-ui/react';
// hooks
import useActiveLink from '../../../../hooks/useActiveLink';

// ----------------------------------------------------------------------

const DesktopNavItem = ({ navItem }) => {
  const linkColor = 'white';
  const linkHoverColor = 'brand.50';  

  const { active } = useActiveLink(navItem.href);
  
  return(
    <Box>
      <Link
        as={RouteLink}
        p={2}
        to={navItem.href ?? '#'}
        fontSize="md"
        color={ active ? 'brand.900' : linkColor }
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}>
        {navItem.label}
      </Link>
    </Box>  
  );
}

export default DesktopNavItem;