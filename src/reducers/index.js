import { MOVIE_DATA, IS_LOADING, IS_ERROR } from '../constants'

const initialState = {
    movieData :[],
    isLoading : false,
    error: null
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case MOVIE_DATA:
            return {...state, movieData: action.payload, isLoading: false, error: null};

        case IS_LOADING:
            return {...state, isLoading: action.payload};

        case IS_ERROR:
            return {...state, error: action.payload, isLoading: false};

        default:
            return state
    }
};

export default reducer;
