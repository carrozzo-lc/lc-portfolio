import NAV_ITEMS from '../config-navigation';
// chakra
import { Stack } from '@chakra-ui/react';
// components
import MobileNavItem from './MobileNavItem';

// ----------------------------------------------------------------------

const MobileNavigation = () => {
  return (
    <Stack
      bg="brand.300"
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNavigation;