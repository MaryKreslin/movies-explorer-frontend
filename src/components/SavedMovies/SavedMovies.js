import React, {useEffect} from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

const SavedMovies = (props) => {

    useEffect(() => {
        props.headerTypechange("savedMovies")
    }, [])

    return (
        <>
            {props.isLoading ? <Preloader /> :
                <>
                    <SearchForm />
                    <MoviesCardList isSaved={true} />
                    <div className='savedMovies__devider'></div>
                    <Footer />
                </>
            }
        </>
    )
}

export default SavedMovies;