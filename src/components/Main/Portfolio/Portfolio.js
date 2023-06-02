import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import AboutMe from '../AboutMe/AboutMe';
import me from '../../../images/me.jpg';
import Line from '../../Line/Line';

const Portfolio = (props) => {
    return (
        <section className='portfolio'>
            <SectionHeader text='Студент' />
            <AboutMe />
            <p className='portfolio__title' >Портфолио</p>
            <ul className='portfolio__list'>
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='#' >Статичный сайт</a>
                    <p className='portfolio__arrowLink'>↗</p>
                </li>
                <Line color='grey' />
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='#'>Адаптивный сайт</a>
                    <p className='portfolio__arrowLink'>↗</p>
                </li>
                <Line color='grey' />
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='#'>Одностраничное приложение</a>
                    <p className='portfolio__arrowLink'>↗</p>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;