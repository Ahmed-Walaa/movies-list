import { useMovieContext } from "./Context/GlobalContext";
import * as actions from "./Context/ActionTypes";

function ReasaltCar({ movie }) {
  const moiveContex = useMovieContext();
  const storedMovie = moiveContex.watchlist.find(
    (o) => o.imdbID === movie.imdbID
  );
  const storedMovieWatched = moiveContex.watched.find(
    (o) => o.imdbID === movie.imdbID
  );

  const WatchListDisabled = storedMovie || storedMovieWatched;
  const watchedDisable = storedMovieWatched;

  return (
    <div className="card mb-4 p-4 md:p-5 flex flex-col md:flex-row items-start gap-4 md:gap-6 bg-[#262626] shadow-lg rounded-xl border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:scale-[1.02]">
      {movie.Poster && movie.Poster !== "N/A" ? (
        <img
          className="w-full md:w-32 lg:w-40 h-64 md:h-36 lg:h-44 object-cover rounded-lg shadow-md shrink-0"
          src={movie.Poster}
          alt={movie.Title}
        />
      ) : (
        <div className="w-full md:w-32 lg:w-40 h-64 md:h-36 lg:h-44 bg-gray-700 rounded-lg shrink-0 flex items-center justify-center">
          <i className="fa-solid fa-image text-gray-500 text-3xl"></i>
        </div>
      )}

      <div className="flex flex-col justify-between flex-1 w-full min-w-0">
        <div className="mb-4 md:mb-0">
          <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-2 line-clamp-2">
            {movie.Title}
          </h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <i className="fa-solid fa-calendar text-primary"></i>
            <p className="text-gray-400">{movie.Year || "-"}</p>
          </div>
        </div>

        <div className="controls w-full flex flex-row md:flex-col gap-3 md:gap-2 items-stretch md:items-start mt-auto">
          <button
            type="button"
            onClick={() =>
              moiveContex.movieDispatch({
                type: actions.ADD_MOVIES_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="btn flex-1 md:flex-none text-sm md:text-base px-4 py-2.5"
            disabled={WatchListDisabled}
          >
            Add to WatchList
          </button>
          <button
            type="button"
            onClick={() =>
              moiveContex.movieDispatch({
                type: actions.ADD_MOVIES_TO_WATCHED,
                payload: movie,
              })
            }
            className="btn flex-1 md:flex-none text-sm md:text-base px-4 py-2.5"
            disabled={watchedDisable}
          >
            Watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReasaltCar;
