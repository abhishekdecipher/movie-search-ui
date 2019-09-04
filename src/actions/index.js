import { MOVIE_DATA, IS_LOADING, IS_ERROR } from '../constants'
import { loadMoviesData } from '../apis'

export const setMoviesData = (payload) => {
    return {
        type: MOVIE_DATA,
        payload
    }
};

export const setLoadingState = (payload) => {
    return {
        type: IS_LOADING,
        payload
    }
};

export const setErrorState = (payload) => {
    return {
        type: IS_ERROR,
        payload
    }
};

export const getMoviesDataList = (search) => {
    return (dispatch) => {
        dispatch(setLoadingState(true));
        loadMoviesData(search)
            .then(({data}) => {
                dispatch(setMoviesData(data.movieDetailsList || []))
            })
            .catch((err)=>{
                dispatch(setErrorState(err));
            })
    }
};

module.exports = {
    getMoviesDataList
};
