import PropTypes from 'prop-types';
// chakra
import { Heading, Button, Box, Text } from '@chakra-ui/react'

// ----------------------------------------------------------------------

const Hero = ({ title, description, scrollButton}) => {
  return (
    <Box bg='brand.500' color='white' pt={{ base: 42, sm: 62 }} pb={{ base: 68, sm: 88 }} px={{ base: '24px' }}>
      <Box sx={{ maxWidth: 600, textAlign: 'center', margin: 'auto' }}>
        <Heading as="h1" size="xl" mb="12px">{title}</Heading>
        <Text fontSize='lg'>{description}</Text>      
        {scrollButton && (
          <Button variant='outline' sx={{ 
            color: 'white',
            borderColor: 'white',
            minWidth: 220,
            mt: '24px',
            '&:hover': {
              color: 'gray.700',
              backgroundColor: 'white'
            }
          }}>
            Get help now
          </Button>        
        )}
      </Box>
    </Box>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  scrollButton: PropTypes.bool,
};

export default Hero;