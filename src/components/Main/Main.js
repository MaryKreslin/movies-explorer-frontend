import React from 'react';
import Header from '../Header/Header';
import Logo from './Logo/Logo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const Main = (props) => {
    return (
        <>
            <Header type={props.headerType}/>
            <Logo />
            <AboutProject />
            <Techs />
            <Portfolio />
            <Footer />
        </>
    )
}

export default Main;