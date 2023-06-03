import React from 'react';
import Line from '../../Line/Line';

const SearchForm = (props) => {
    return (
        <section className='searchForm'>
            <div className='searchForm__block'>
                <input className='searchForm__input' />
                <button className='searchForm__button'>
                    <p className='searchForm__buttonText'>Найти</p>
                </button>
            </div>
            <div className='searchForm__toggle-block'>
                <div className='searchForm__toggle'>
                    <input type="checkbox" className='searchForm__checkbox' id="switch" />
                    <label htmlFor='switch' className='searchForm__label'>Toggle</label>
                </div>
                <p className='searchForm__toggle-label'>Короткометражки</p>
            </div>
            <Line color='grey' />
        </section>
    )
}

export default SearchForm;