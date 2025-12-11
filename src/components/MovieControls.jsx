import { useMovieContext } from "./Context/GlobalContext";
import * as actions from "./Context/ActionTypes";
function MovieControls({ type, movie }) {
  const movieContext = useMovieContext();
  return (
    <div className="flex items-center absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/80 rounded px-2 py-1 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
      {type === "watchlist" && (
        <>
          <button
            onClick={() =>
              movieContext.movieDispatch({
                type: actions.ADD_MOVIES_TO_WATCHED,
                payload: movie,
              })
            }
            className="text-[#fefefe] bg-transparent border-none transition-all duration-300 ease-in-out w-10 text-xl p-2 m-0 hover:text-gray-400 cursor-pointer"
          >
            <i className="fa-solid fa-eye" />
          </button>
          <button
            onClick={() =>
              movieContext.movieDispatch({
                type: actions.REMOVE_MOVIES_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
            className="text-[#fefefe] bg-transparent border-none transition-all duration-300 ease-in-out w-10 text-xl p-2 m-0 hover:text-gray-400 cursor-pointer"
          >
            <i className="fa-solid fa-times" />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            onClick={() =>
              movieContext.movieDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="text-[#fefefe] bg-transparent border-none transition-all duration-300 ease-in-out w-10 text-xl p-2 m-0 hover:text-gray-400 cursor-pointer"
          >
            <i className="fa-solid fa-eye-slash" />
          </button>
          <button
            onClick={() =>
              movieContext.movieDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
            className="text-[#fefefe] bg-transparent border-none transition-all duration-300 ease-in-out w-10 text-xl p-2 m-0 hover:text-gray-400 cursor-pointer"
          >
            <i className="fa-solid fa-times" />
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
