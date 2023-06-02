import React, {useEffect} from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

const Main = (props) => {
    useEffect(() => {
        props.headerTypechange("main")
    }, [])
    return (
        <>
            {props.isLoading ? <Preloader /> :
                <>
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