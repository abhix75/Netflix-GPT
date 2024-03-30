import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies = action.payload;
        },
        addTrailerVideos:(state,action)=>{
            state.trailerVideo = action.payload;
        }
    }

})

export const {addNowPlayingMovies,addTrailerVideos} = movieSlice.actions;
export default movieSlice.reducer; 