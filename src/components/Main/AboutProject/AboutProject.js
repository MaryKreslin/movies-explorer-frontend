import React from 'react';

const AboutProject = (props) => {
    return (
        <section className='aboutProject'>
            <h2 className='aboutProject__header'>О проекте</h2>
            <hr className='aboutProject__line' />
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
            <div className='aboutProject__line-block'>
                <div className='aboutProject__lineText'>
                    <p className='aboutProject__line1text'>1 неделя</p>
                    <p className='aboutProject__line2text'>Back-end</p>
                </div>
                <div className='aboutProject__lineText'>
                    <p className='aboutProject__line1text'>4 недели</p>
                    <p className='aboutProject__line2text'>Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;