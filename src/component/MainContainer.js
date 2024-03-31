import { useSelector } from "react-redux";
import VideoBackground from "./VideBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies.NowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[5];
    console.log("mainMovie",mainMovie);

    const {original_title,overview,id} = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}
export default MainContainer;