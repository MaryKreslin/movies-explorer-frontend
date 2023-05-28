import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

const Techs = (props) => {
    return (
        <section className='techs'>
            <SectionHeader text='Технологии' />
            <h3 className='techs__header'>7 технологий</h3>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__flexrow'>
                <li className='techs__rowitem'>
                    <p className='techs__rowtext'>HTML</p>
                </li>
                <li className='techs__rowitem'>
                    <p className='techs__rowtext'>CSS</p>
                </li>
                <li className='techs__rowitem'>
                    <p className='techs__rowtext'>JS</p>
                </li>
                <li className='techs__rowitem'>
                    <p className='techs__rowtext'>React</p>
                </li>
                <li className='techs__rowitem'>
                    <p className='techs__rowtext'>Git</p>
                </li>
                <li className='techs__rowitem'>
                    <p className='techs__rowtext'>Express.js</p>
                </li>
                <li className='techs__rowitem'>
                    <p className='techs__rowtext'>mongoDB</p>
                </li>
            </ul>
        </section>
    )
}

export default Techs;