// chakra
import { Box } from '@chakra-ui/react';
// components
import Hero from '../../components/common/Hero';
import CtaTextImage from '../../components/common/CtaTextImage';
// assets
import entrepeneursImg from '../../assets/entrepeneurs.svg';
import careersImg from '../../assets/careers.svg'
// components
import Seo from '../../components/common/Seo';

// ----------------------------------------------------------------------

const GeneralPage = () => {
  return (
    <>
      <Seo 
        title="Elevate Your Web Presence | UI/UX & Front-End Development Expert"
        description="Transform your vision into exceptional online experiences with a trusted UI/UX and Front-End Development expert. Get help from a vetted professional to take your web projects to the next level and enhance your web presence."
        type="website"
        name="@carrozzo_lc"
        url="https://www.lucacarrozzo.com/mentorship"
        siteName="Luca Carrozzo Mentorship Program"
      />       
      <Hero 
        title="Get help from a vetted UI/UX & Front-End Developer"
        description="Elevate your web presence with my expertise in UI/UX design and front-end development. I specialize in transforming your vision into reality, delivering exceptional online experiences. Take your web projects to the next level with a trusted professional by your side."
      />
      <Box py={9} />
      <CtaTextImage
        title="Mentorship for entrepeneur"
        description="Unleash your web project's potential with exclusive mentorship. Captivate your audience with stunning UI/UX design. Overcome technical challenges with expert guidance. Partner with a mentor who understands your vision. Book your exclusive session now."
        btnText="Get help now"
        btnRoute="/mentorship/entrepeneur"
        image={entrepeneursImg}
        imageToText 
      />
      <Box py={{ base: 9, sm: 8 }} />
      <CtaTextImage
        title="Mentorship for careers"
        description="Unlock your potential with my Front-End Developer Mentorship. Personalized guidance, hands-on projects, and job preparation to excel in web development. Flexible sessions and hassle-free booking. Elevate your skills now!"
        btnText="Get help now"
        btnRoute="/mentorship/career"
        image={careersImg}
      />
      <Box py="70px" />   
    </>
  );
}

export default GeneralPage;