import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Responsive from '../Responsive/Responsive';

const Main = (props) => {
   
    return (
        <>
            {props.isLoading ? <Preloader /> :
                <>
                    <Responsive element={Header} type={props.headerType} handleClick={props.handleHeaderClick} />
                    <Promo />
                    <AboutProject />
                    <Techs />
                    <Portfolio />
                    <Footer />
                </>}
        </>
    )
}

export default Main;