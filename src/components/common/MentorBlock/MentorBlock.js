import { Link as RouteLink } from "react-router-dom";
// chakra
import { Image, Container, Heading, Button, Stack, Text, Box, VStack, Flex, Icon, Link } from '@chakra-ui/react';
// assets
import image from '../../../assets/profilo.jpg';
import { FaFilePen, FaSquareJs, FaReact, FaShopify, FaWordpressSimple } from 'react-icons/fa6';

// ----------------------------------------------------------------------

const dataObj = {
  intro: {
    title: "Luca Carrozzo",
    subtitle: "UI/UX & Front End Developer",
    textBtn: "Let’s chat",
    linkBtn: "https://calendly.com/me-lc/mentorship-first-free-session"
  },
  about: {
    title: "About me",
    description: "I am Luca Carrozzo, a UI/UX & Front-End Developer based in Italy. I am primarily focused on website and interface development for web applications but I love taking on any good front end dev challenge."
  },
  expertise: {
    title: "Expertise",  
    skillList: [
      {
        icon: "front-end",
        title: "Front-End",
        subtitle: "Front-end expert specializing in web app development with HTML, CSS, and JavaScript. Crafting stunning and functional user interfaces."
      },
      {
        icon: "ui-ux",
        title: "UI/UX",
        subtitle: "Crafting visually stunning and high-performing experiences across all devices is my passion. With a keen eye for design and an understanding of the latest techniques and trends."
      },
      {
        icon: "html-css",
        title: "Html/Css",
        subtitle: "With years of experience in HTML/CSS development, I possess the expertise to address any webpage challenges you face. Let me help you overcome any issues and optimize your web presence."
      },
      {
        icon: "javascript",
        title: "Javascript",
        subtitle: "Leveraging the versatility of JavaScript, I create robust and interactive web solutions. With expertise in best practices and clean coding, I deliver fast, efficient, and engaging user experiences."
      },
      {
        icon: "react",
        title: "React Js",
        subtitle: "Harnessing the power of React, I develop dynamic and responsive web applications. Utilizing best practices and clean code, I create fast, efficient, and user-friendly experiences that engage and captivate your audience."
      },
      {
        icon: "shopify",
        title: "Shopify",
        subtitle: "Building custom Shopify websites with best practices and clean code. Enjoy a fast, secure, and seamless e-commerce experience for your business."
      },
      {
        icon: "wordpress",
        title: "WordPress",
        subtitle: "Crafting WordPress websites from scratch with best practices and clean code. Experience fast, secure, and reliable websites tailored to your needs."
      }                      
    ]
  }
}

const getIcon = (value) => {
  switch (value) {
    case 'front-end':
      return (
        <Icon  width="28px" height="26px" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M28 2.37614V22.9235C28 24.208 27.0038 25.2498 25.7841 25.2498H2.21591C0.992429 25.2498 0 24.208 0 22.9235V2.37614C0 1.09168 0.992429 0.0498047 2.21591 0.0498047H25.7841C27.0038 0.0498047 28 1.09168 28 2.37614ZM26.6 22.1157V4.24979H1.40001V22.1157C1.40001 22.3261 1.57656 22.4951 1.79627 22.4951H26.2077C26.4235 22.4951 26.6 22.3261 26.6 22.1157ZM22.2766 2.13132C22.2766 1.79332 22.0001 1.52291 21.6629 1.52291C21.322 1.52291 21.0493 1.79332 21.0493 2.13132C21.0493 2.46559 21.322 2.73975 21.6629 2.73975C22.0001 2.73975 22.2766 2.46559 22.2766 2.13132ZM24.9356 2.13132C24.9356 2.46559 25.2122 2.73975 25.5492 2.73975C25.8902 2.73975 26.1628 2.46559 26.1628 2.13132C26.1628 1.79332 25.8902 1.52291 25.5492 1.52291C25.2122 1.52291 24.9356 1.79332 24.9356 2.13132ZM24.2198 2.13132C24.2198 1.79332 23.9432 1.52291 23.6062 1.52291C23.2653 1.52291 22.9925 1.79332 22.9925 2.13132C22.9925 2.46559 23.2653 2.73975 23.6062 2.73975C23.9432 2.73975 24.2198 2.46559 24.2198 2.13132Z" fill="#2D3748"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M24.5002 6.875V7.90316C24.5002 7.91535 24.3531 7.92505 24.1733 7.92505H3.8304C3.64731 7.92505 3.50018 7.91535 3.50018 7.90316V6.875H24.5002Z" fill="#2D3748"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M24.5002 8.97461V10.0028C24.5002 10.015 24.3531 10.0247 24.1733 10.0247H3.8304C3.64731 10.0247 3.50018 10.015 3.50018 10.0028V8.97461H24.5002Z" fill="#2D3748"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M24.5002 11.0747V12.1029C24.5002 12.1151 24.3531 12.1248 24.1733 12.1248H3.8304C3.64731 12.1248 3.50018 12.1151 3.50018 12.1029V11.0747H24.5002Z" fill="#2D3748"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M8.7502 14.2246V19.3654C8.7502 19.426 8.71343 19.4746 8.66841 19.4746H3.58273C3.53696 19.4746 3.50018 19.426 3.50018 19.3654V14.2246H8.7502Z" fill="#2D3748"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M16.625 14.2246V19.3654C16.625 19.426 16.5845 19.4746 16.535 19.4746H10.9407C10.8904 19.4746 10.8499 19.426 10.8499 19.3654V14.2246H16.625Z" fill="#2D3748"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M24.5001 14.2246V19.3654C24.5001 19.426 24.4633 19.4746 24.4184 19.4746H19.3327C19.2869 19.4746 19.2501 19.426 19.2501 19.3654V14.2246H24.5001Z" fill="#2D3748"/>
        </Icon>
      );
    case 'ui-ux':
      return <Icon as={FaFilePen} width="28px" height="26px" viewBox="0 0 28 26" />;
    case 'html-css':
      return (
        <Icon width="32px" height="24px" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1121 3.96113H28L26.7341 18.303L21.0476 19.8973L15.3765 18.3044L14.1121 3.96113ZM0.00140955 3.96113H13.9189L12.6503 18.4017L6.95101 19.9072L1.26728 18.372L0 3.96254L0.00140955 3.96113ZM24.9721 2.12012V2.69385H22.4657V1.90304H23.7795L22.4657 0.692141V0H24.9721V0.792226H23.8514L24.9721 2.12012ZM21.9963 2.12012V2.69385H19.6464V1.90304H20.8587L19.6464 0.692141V0H21.9963V0.792226H20.9292L21.9963 2.12012ZM19.177 1.90163V2.69385H16.9821V0H19.1756V0.792226H17.921V1.90163H19.177ZM1.3138 0.0986762H2.19483V0.979711H2.99975V0.0986762H3.88078V2.76574H2.99975V1.87343H2.19483V2.76574H1.3138V0.0986762ZM5.03952 0.98394H4.26421V0.0986762H6.69587V0.98394H5.92056V2.76574H5.03952V0.98394ZM7.0807 0.0986762H7.9998L8.56366 1.0361L9.12752 0.0986762H10.0466V2.76574H9.16981V1.44349L8.56366 2.39219H8.54956L7.94341 1.44349V2.76574H7.0807V0.0986762ZM10.485 0.0986762H11.3661V1.88471H12.6051V2.76574H10.4836V0.0986762H10.485ZM24.5844 15.4357L24.9523 11.9652L25.3738 7.18643L25.4161 6.6578H16.7072L16.7495 7.19347L16.8285 8.14922L16.8623 8.55943H23.5159L23.3566 10.3032H18.9895L19.0304 10.7782L19.1093 11.6734L19.1445 12.0469H23.2015L22.9971 14.3531L21.056 14.9099L19.1234 14.3884L18.9993 12.9984H17.2542L17.4938 15.7473L21.056 16.7298L24.5858 15.7332L24.5844 15.4357ZM11.2843 7.36686L11.3266 6.97498H2.59659L2.63888 7.47682L3.066 12.3641H9.10497L8.90198 14.5392L6.95947 14.9579V14.9565V14.9931L5.01838 14.4955L4.89433 13.1549H3.14635L3.3874 15.8586L6.95524 16.7961L6.95947 16.7932L10.5287 15.822L10.5597 15.5541L10.9685 10.9728L11.0108 10.6203H4.66173L4.50244 8.71731H11.1701L11.2039 8.29019L11.2843 7.36686Z" fill="#2D3748"/>
        </Icon>      
      );
    case 'javascript':
      return <Icon as={FaSquareJs} width="30px" height="28px" viewBox="0 0 30 28" />;
    case 'react':
      return <Icon as={FaReact} width="30px" height="28px" viewBox="0 0 30 28" />;
    case 'shopify':
      return <Icon as={FaShopify} width="30px" height="28px" viewBox="0 0 30 28" />;
    case 'wordpress':
      return <Icon as={FaWordpressSimple} width="30px" height="28px" viewBox="0 0 30 28" />;                 
    default:
      return 'error: no icon';
  }
}

const MentorBlock = () => {
  return (
    <Container 
      maxW={'990px'} 
      px={{ base: '12px', md: '24px' }}
      py={{ base: '36px', sm: '48px' }}
      bg="white"
      color="gray.700"
      borderColor="brand.900"
      borderWidth={2}
      borderRadius={10}
    >
      <Box
        display={{ base:"block", md:"flex" }}
        sx={{
          justifyContent: 'center',
          maxWidth: '840px',
          margin: 'auto'
        }}
      >
        <Box 
          minW={{ base: 'auto', sm: "242px"  }}
          textAlign="center" 
          pr={{ base: 0, md: "32px" }}
          mb={{ base: "32px", md: 0 }}
        >
          <Image
            src={image}
            width="160px"
            margin="auto"
            borderRadius={100}
            mb="8px"
          />        
          <Heading as="h3" size="lg" mb="2px">
            {dataObj.intro.title}
          </Heading>
          <Text fontSize="sm" color="gray.600" mb="14px">
            {dataObj.intro.subtitle}
          </Text>
          <Button
            as={Link} 
            colorScheme="orange" 
            size="sm"
            href={dataObj.intro.linkBtn}
            width="100%"
            isExternal
          >
            {dataObj.intro.textBtn}
          </Button>
        </Box>

        <Stack spacing='28px' pl={{ base: 0, md: "32px" }}>
          <Box>
            <Heading as="h3" size="md" mb="13px">
              {dataObj.about.title}
            </Heading>
            <Text fontSize="md">
              {dataObj.about.description}
            </Text>                   
          </Box>
          <Box>
            <Heading as="h3" size="md" mb="21px">
              {dataObj.expertise.title}
            </Heading>
            <VStack spacing={6} align="left">
              {dataObj.expertise.skillList.map(item => (
                <Flex key={item.title}>
                  {getIcon(item.icon)}
                  <Box pl={{ base: 4, md: 4 }} mt={-1}>
                    <Heading as="h4" size="sm" mb="6px">
                      {item.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      {item.subtitle}
                    </Text>                                       
                  </Box>                  
                </Flex>                               
              ))}
            </VStack>
            <Button
              as={RouteLink}
              to={'/'}
              width="100%"
              mt="32px"
              variant="outline"
              borderColor="gray.700"
            >
              Go to full portfolio
            </Button>                
          </Box>
        </Stack>

      </Box>
    </Container>  
  );
}

export default MentorBlock;