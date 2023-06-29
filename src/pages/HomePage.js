import React, { useState } from 'react';
// data
import siteData from '../siteData';
// styles
import '../styles/main.scss';
// hooks
import { BreakpointProvider } from '../shared/breakpoint';
// components
import Header from '../components/homepage/Header';
import Masthead from '../components/homepage/Masthead';
import About from '../components/homepage/About';
import Services from '../components/homepage/Services';
import Portfolio from '../components/homepage/Portfolio';
import Footer from '../components/homepage/Footer';
import ScrollToTopBtn from "../components/homepage/ScrollToTop";
import Seo from '../components/common/Seo';

// ----------------------------------------------------------------------

const queries = {
  maxWth575: '(max-width: 575.98px)',
  minWth576: '(min-width: 576px)',
  maxWth767: '(max-width: 767.98px)',
  minWth768: '(min-width: 768px)',
  maxWth1399: '(max-width: 1399.98px)',
  minWth1400: '(min-width: 1400px)',
  or: '(orientation: portrait)',
};

const Home = () => {
  const [siteDataState] = useState(siteData);

  return (
    <BreakpointProvider queries={queries}>
      <Seo 
        title="Luca Carrozzo - UI/UX & Front-End Developer | Website"
        description="I’m a Front-End Designer and Developer with a focus on UI, UX."
        type="website"
        name="@carrozzo_lc"
        url="https://www.lucacarrozzo.com"
        siteName="Luca Carrozzo Portfolio Website"
        image="/assets/images/social-img.jpg"
      />
      <main className="App">
        <Header contentData={siteDataState} />
        <Masthead contentData={siteDataState} />
        <About contentData={siteDataState} />
        <Services contentData={siteDataState} />
        <Portfolio contentData={siteDataState} />
        <Footer contentData={siteDataState} />
        <ScrollToTopBtn />
      </main>
    </BreakpointProvider>
  );
};

export default Home;  