import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        trailerVideo:null,
        PopularMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies = action.payload;
        },
        addTrailerVideos:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies = action.payload;
        },

    }

})

export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer; 