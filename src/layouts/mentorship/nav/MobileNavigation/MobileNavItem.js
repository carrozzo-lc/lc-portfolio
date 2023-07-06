import PropTypes from 'prop-types';
// chakra
import { Flex, Text, Stack, Link } from '@chakra-ui/react';

// ----------------------------------------------------------------------

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color="white">
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

MobileNavItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string
};

export default MobileNavItem;