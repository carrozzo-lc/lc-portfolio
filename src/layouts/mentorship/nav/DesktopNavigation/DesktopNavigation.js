import NAV_ITEMS from '../config-navigation';
// chakra
import { Stack } from '@chakra-ui/react';
// component
import DesktopNavItem from './DesktopNavItem';

// ----------------------------------------------------------------------

const DesktopNavigation = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <DesktopNavItem key={navItem.label} navItem={navItem} />
      ))}
    </Stack>
  );
};

export default DesktopNavigation;