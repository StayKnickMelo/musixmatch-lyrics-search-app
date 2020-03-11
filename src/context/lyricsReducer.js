import {
  SEARCH_TRACKS,
  LOAD_TRACKS,
  SWITCH_CHARTS

} from './types'


const lyricsReducer = (state, action) => {
  switch(action.type){
    case LOAD_TRACKS:
      return {
        ...state,
        track_list: action.payload,
        // heading: 'Top 10 Tracks'
      }
    case SEARCH_TRACKS:
      return {
        ...state,
        track_list: action.payload,
        heading: 'Search Results'
      }
    case SWITCH_CHARTS:
      return {
        ...state,
        country: action.payload
      }
    default:
      return  state
  }
}


export default lyricsReducer;