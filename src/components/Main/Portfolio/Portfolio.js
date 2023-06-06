import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import AboutMe from '../AboutMe/AboutMe';
import Line from '../../Line/Line';

const Portfolio = (props) => {
    return (
        <section className='portfolio'>
            <SectionHeader text='Студент' />
            <AboutMe />
            <p className='portfolio__title' >Портфолио</p>
            <ul className='portfolio__list'>
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='https://marykreslin.github.io/how-to-learn/index.html' target='blank'>Статичный сайт</a>
                    <p className='portfolio__arrowLink'>↗</p>
                </li>
                <Line color='grey' />
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='https://marykreslin.github.io/russian-travel/index.html' target='blank'>Адаптивный сайт</a>
                    <p className='portfolio__arrowLink'>↗</p>
                </li>
                <Line color='grey' />
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='https://domainkreslin.students.nomoredomains.monster' target='blank'>Одностраничное приложение</a>
                    <p className='portfolio__arrowLink'>↗</p>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;