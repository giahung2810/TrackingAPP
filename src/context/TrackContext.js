import createContext from './createDataContext';
import trackerApi from '../api/tracker';


const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
}

const fetchTracks = dispatch => async () => {
    const reponse = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: reponse.data})
}
const createTracks = dispatch => async (name , locations) => {
    await trackerApi.post('/tracks',{ name, locations })
}

export const {Context, Provider} = createContext(
    trackReducer, 
    {fetchTracks, createTracks},
    []
)