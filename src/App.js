import React, { Component } from 'react';

import Header from './components/Header';
import Masthead from './components/Masthead';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ScrollToTopBtn from "./components/ScrollToTop";

import siteData from './siteData';

import {BreakpointProvider} from './shared/breakpoint';

const queries = {
    maxWth575: '(max-width: 575.98px)',
    minWth576: '(min-width: 576px)',
    maxWth767: '(max-width: 767.98px)',
    minWth768: '(min-width: 768px)',
    maxWth1399: '(max-width: 1399.98px)',
    minWth1400: '(min-width: 1400px)',
    or: '(orientation: portrait)',
}

class App extends Component {

    state = {
        siteData: siteData
    }

    render () {  
        return (
            <BreakpointProvider queries={queries}>
                <main className="App">
                    <Header contentData={this.state.siteData}/>
                    <Masthead contentData={this.state.siteData} />
                    <About contentData={this.state.siteData} />
                    <Services contentData={this.state.siteData} />
                    <Portfolio contentData={this.state.siteData} />
                    <Footer contentData={this.state.siteData} />
                    <ScrollToTopBtn />                 
                </main>
            </BreakpointProvider>  
        );
    }
}

export default App;
