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
<p>Are you ready to take your <strong>front-end development skills</strong> to the next level? Look no further! With my Front-End Developer Mentorship, you&#39;ll receive the expert guidance and support you need to excel in the world of web development.</p>

<p>Why Choose My Mentorship?</p>

<ul>
	<li>Personalized Guidance: As an experienced front-end developer, I will be your dedicated mentor, providing personalized guidance tailored to your <strong>specific goals and aspirations</strong>. I&#39;ll <strong>review </strong>your code, offer valuable feedback, and answer any questions you may have. Together, we&#39;ll fast-track your learning process and help you overcome any challenges along the way.</li>
	<li>Project-Based Learning: Gain hands-on experience through exciting, real-world projects. You&#39;ll have the opportunity to build websites and web applications from scratch, allowing you to apply your skills in a practical setting. This practical experience will empower you to <strong>develop a portfolio</strong> that showcases your abilities and attracts potential employers.</li>
	<li>Job Preparation: Stand out from the crowd with <strong>comprehensive job preparation</strong> guidance. From optimizing your resume to mastering interview techniques, I&#39;ll provide you with the tools and strategies to present yourself confidently and professionally in front-end development roles. Your success in landing your dream job is my ultimate goal.</li>
</ul>

<p><strong>How It Works:</strong></p>

<p>During our mentorship journey, we&#39;ll collaborate closely to ensure your success. Here&#39;s what you can expect:</p>

<ul>
	<li>Flexible Sessions: I offer up to <strong>3 hours </strong>of dedicated support per week, totaling 12 hours per month. We&#39;ll work together to find the most convenient session times that fit your schedule. Whether you need occasional assistance or regular guidance, I&#39;m here to accommodate your needs and provide the necessary support.</li>
	<li>Booking Made Easy: Ready to take the next step? Book your mentorship session now through my Calendly link. It&#39;s quick and hassle-free. Simply select a time slot that suits you best, and we&#39;ll embark on this transformative journey together.</li>
</ul>

<p><strong>Evaluation and Continuation:</strong></p>

<p>To ensure your progress and satisfaction, we&#39;ll regularly review and assess your development journey. This evaluation will help us tailor our mentorship to meet your evolving needs and ensure you&#39;re on track to achieve your goals. Our collaboration doesn&#39;t stop until you&#39;ve accomplished what you set out to achieve.</p>

<p>Ready to Elevate Your Front-End Development Skills?</p>

<p>Don&#39;t miss this opportunity to receive expert mentorship that will propel your <strong>front-end development career </strong>forward. Book your mentorship session now by clicking the button below. Together, we&#39;ll unlock your full potential and open doors to exciting opportunities in the world of web development.</p>

`;

const CareerPage = () => {

  return (
    <>
      <Seo 
        title="Unlock Your Potential with Front-End Developer Mentorship"
        description="Ready to excel in web development? Take your front-end development skills to the next level with my personalized Front-End Developer Mentorship. Gain expert guidance, hands-on projects, and job preparation support. Unlock your full potential and seize exciting opportunities in the world of web development. Book your mentorship session now."
        type="website"
        name="@carrozzo_lc"
        url="https://www.lucacarrozzo.com/mentorship"
        siteName="Luca Carrozzo Mentorship Program"
      />      
      <Hero title="Unlock Your Potential with Front-End Developer Mentorship" />
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
          mb={6}
          isExternal
        >Book the first free session
        </Button>
        <Button
          as={RouteLink}
          leftIcon={<Icon as={FaArrowLeft} />} 
          colorScheme='black' 
          variant='link' 
          mt={5} 
          mb={6}
          to="/mentorship"
        >Back to home
        </Button>         
      </Container>
    </>
  );
}

export default CareerPage;