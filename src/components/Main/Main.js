import React from 'react';
import Logo from './Logo/Logo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

const Main = (props) => {
    return (
        <>
            {props.isLoading ? <Preloader /> :
                <>
                    <Logo />
                    <AboutProject />
                    <Techs />
                    <Portfolio />
                    <Footer />
                </>}
        </>
    )
}

export default Main;