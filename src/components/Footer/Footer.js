import React from 'react';
import Line from '../Line/Line';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <p className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <Line color='grey' />
            <div className='footer__textBlock'>
                <p className='footer__text'>&copy; 2023</p>
                <div className='footer__links'>
                    <p className='footer__text'>Яндекс.Практикум</p>
                    <p className='footer__text'>Github</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;