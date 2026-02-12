// chakra
import { Box, Spinner } from '@chakra-ui/react';

// ----------------------------------------------------------------------

export default function LoadingScreen() {

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginTop: '80px', 
      marginBottom: '120px' 
    }}>
      <Spinner width={100} height={100}  size='xl' />
    </Box>
  );
}
