import React from 'react';
import me from '../../../images/me.jpg';

const AboutMe = () => {
    return (
        <div className='aboutMe'>
            <div className='aboutMe__textBlock'>
                <h3 className='aboutMe__name'>Мария</h3>
                <p className='aboutMe__about'>Инженер-конструктор, 42 года</p>
                <p className='aboutMe__text'>Я родилась и живу в Туле, закончила Технологический факультет ТулГУ, к.т.н. У меня есть муж
                    и сын. Я люблю слушать музыку, плавать. С 2016 по 2015 год работала доцентом на кафедре в ТулГУ, с 2015 - инженер ООО "фирма "Алькор".
                    После того, как прошла курс по веб-разработке, хочу поменять работу.</p>
                <a href='https://github.com/MaryKreslin' className='aboutMe__link'>Github</a>
            </div>
            <img className='aboutMe__image' src={me} alt='Фото студента' />
        </div>
    )
}

export default AboutMe;