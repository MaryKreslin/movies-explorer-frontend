import React from 'react';

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
                    <label for="switch">Toggle</label>
                </div>
                <p className='searchForm__toggle-label'>Короткометражки</p>
            </div>
            <hr className='searchForm__line'></hr>
        </section>
    )
}

export default SearchForm;