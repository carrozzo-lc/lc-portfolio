import PropTypes from 'prop-types';
// chakra
import { Text } from '@chakra-ui/react';

// ----------------------------------------------------------------------

const RichTextContent = ({ content }) => {
  return (
      <Text 
        as="div" fontSize={'md'}
        sx={{
          'p': {
            mb: 4
          },
          'ul': {
            px: '15px',
            py: 0,
            pt: '5px',
            mb: 4
          },
          'li':{
            py: 1
          }
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />   
  );
}

RichTextContent.propTypes = {
  content: PropTypes.string,
};

export default RichTextContent;