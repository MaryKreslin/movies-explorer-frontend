import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import me from '../../../images/me.jpg';

const Portfolio = (props) => {
    return (
        <section className='portfolio'>
            <SectionHeader text='Студент' />
            <div className='portfolio__aboutBlock'>
                <div className='portfolio__textBlock'>
                    <h3 className='portfolio__name'>Мария</h3>
                    <p className='portfolio__about'>Инженер-конструктор, 42 года</p>
                    <p className='portfolio__text'>Я родилась и живу в Туле, закончила Технологический факультет ТулГУ, к.т.н. У меня есть муж
                        и сын. Я люблю слушать музыку, плавать. С 2016 по 2015 год работала доцентом на кафедре в ТулГУ, с 2015 - инженер ООО "фирма "Алькор".
                        После того, как прошла курс по веб-разработке, хочу поменять работу.</p>
                    <p className='portfolio__link'>Github</p>
                </div>
                <img className='portfolio__image' src={me} alt='Фото студента' />
            </div>
            <p className='portfolio__about portfolio__about_grey' >Портфолио</p>
            <ul className='portfolio__list'>
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='#' >Статичный сайт</a>
                    <p className='portfolio__arrowLink'>↗</p>
                </li>
                <hr className='portfolio__line'></hr>
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='#'>Адаптивный сайт</a>
                    <p className='portfolio__arrowLink'>↗</p>
                </li>
                <hr  className='portfolio__line'></hr>
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='#'>Одностраничное приложение</a>
                    <p className='portfolio__arrowLink'>↗</p>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;