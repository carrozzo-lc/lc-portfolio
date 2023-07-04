import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

const Seo = ({ title, description, name, type, siteName, url, image }) => {
  return (
    <Helmet>
      { /* Standard metadata tags */}
      {url && <link rel="canonical" href={url} />}
      {title && <title>{title}</title>}
      {description && <meta name='description' content={description} />}
      { /* End standard metadata tags */}
      { /* Facebook tags */}
      {type && <meta property="og:type" content={type} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      {image && <meta property="og:image" content={image} />}      
      { /* End Facebook tags */}
      { /* Twitter tags */}
      <meta name="twitter:card" content="summary" />
      {name && <meta name="twitter:creator" content={name} />}
      {type && <meta name="twitter:card" content={type} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      { /* End Twitter tags */}
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string, 
  description: PropTypes.string, 
  name: PropTypes.string, 
  type: PropTypes.string, 
  siteName: PropTypes.string, 
  url: PropTypes.string, 
  image: PropTypes.string,
};

export default Seo;