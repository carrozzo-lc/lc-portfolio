import { Link as RouteLink } from "react-router-dom";
// chakra
import { Button, Link, Container, Icon } from '@chakra-ui/react';
// components
import Hero from '../../components/common/Hero';
import RichTextContent from '../../components/common/RichTextContent/RichTextContent';
import Seo from '../../components/common/Seo';
// icons
import { FaArrowLeft } from "react-icons/fa6";

// ----------------------------------------------------------------------

const myHTML = `
<p>Are you ready to take your web projects to new heights? Experience the power of <strong>personalized mentorship</strong> designed exclusively for <strong>entrepreneurs like you</strong>. I specialize in delivering <strong>exceptional UI/UX design and technical support </strong>that will propel your projects to success.</p>

<p>Unleash the Potential of Your Web Projects:</p>

<ul>
	<li><strong>Cutting-edge UI/UX Design:</strong> Captivate your target audience with stunning interfaces that leave a lasting impression. Stand out from the competition and create an unforgettable user experience</li>
	<li><strong>Seamless User Experience:</strong> Maximize user satisfaction and engagement with intuitive, user-friendly designs. Enhance usability, boost conversions, and leave a lasting impact on your visitors.</li>
	<li><strong>Expert Technical Guidance:</strong> Overcome technical challenges with ease. From troubleshooting to code optimization, I&#39;ll provide you with the knowledge and tools to ensure a flawless and efficient web project.</li>
</ul>

<p>Partner with a Mentor Who Understands Your Vision:</p>

<p>I am committed to your success. With my mentorship, you&#39;ll benefit from personalized attention and dedicated support tailored to your unique goals and aspirations. Together, we&#39;ll transform your web projects into remarkable digital experiences.</p>

<p>Take the Next Step to Success:</p>

<p>Ready to accelerate your web project success? Secure your spot now for an exclusive mentorship session and unlock the full potential of your entrepreneurial journey.</p>
`;

const EntrepeneurPage = () => {

  return (
    <>
      <Seo 
        title="Accelerate Your Web Project Success with Exclusive Mentorship"
        description="Take your front-end development skills to the next level with personalized mentorship. Gain expert guidance, hands-on project experience, and comprehensive job preparation. Book your mentorship session now to unlock your full potential in the world of web development."
        type="website"
        name="@carrozzo_lc"
        url="https://www.lucacarrozzo.com/mentorship"
        siteName="Luca Carrozzo Mentorship Program"
      />    
      <Hero title="Accelerate Your Web Project Success with Exclusive Mentorship" />
      <Container px={{ base: '24px', md: 0 }} py={30}>
        <RichTextContent content={myHTML} />
        <Button
          as={Link} 
          colorScheme="button" 
          size="lg"
          href="https://calendly.com/me-lc/mentorship-first-free-session"
          width="100%"
          target="_blank"
          mt={6}
          mb={8}
          isExternal
        >
          Book the first free session
        </Button>
        <Button
          as={RouteLink}
          leftIcon={<Icon as={FaArrowLeft} />} 
          colorScheme='black' 
          variant='link' 
          mt={5} 
          mb={6}
          to="/mentorship"
        >
          Back to home
        </Button>        
      </Container>      
    </>
  );
}

export default EntrepeneurPage;