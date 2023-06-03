import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

const AboutProject = (props) => {
    return (
        <section className='aboutProject'>
            <SectionHeader text='О проекте' />
            <div className='aboutProject__text-block'>
                <div className='aboutProject__column'>
                    <h3 className='aboutProject__column-header'>Дипломный проект включал 5 этапов</h3>
                    <p className='aboutProject__column-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='aboutProject__column'>
                    <h3 className='aboutProject__column-header'>На выполнение диплома ушло 5 недель</h3>
                    <p className='aboutProject__column-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <ul className='aboutProject__table'>
                <li className='aboutProject__line'>
                    <p className='aboutProject__linetext aboutProject__linetext_background_green '>1 неделя</p>
                    <p className='aboutProject__linetext aboutProject__linetext_color_grey '>Back-end</p>
                </li>
                <li className='aboutProject__line'>
                    <p className='aboutProject__linetext aboutProject__linetext_background_grey'>4 недели</p>
                    <p className='aboutProject__linetext aboutProject__linetext_color_grey '>Front-end</p>
                </li>
            </ul>
        </section>
    )
}

export default AboutProject;