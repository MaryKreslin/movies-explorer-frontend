import React from 'react';
import Line from '../Line/Line';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <Line color='grey' />
            <div className='footer__textBlock'>
                <p className='footer__text'>&copy; 2023</p>
                <ul className='footer__links'>
                    <li>
                        <a className='footer__linktext' href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a className='footer__linktext' href='https://github.com/' target='blank'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;