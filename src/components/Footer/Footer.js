import React from 'react';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <p className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className='footer__line'></hr>
            <div className='footer__textBlock'>
                <p className='footer__text'>&copy; 2020</p>
                <div className='footer__links'>
                    <p className='footer__text'>Яндекс.Практикум</p>
                    <p className='footer__text'>Github</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;