import { useMovieContext } from "./Context/GlobalContext";
import MovieCard from "./MovieCard";
function Wathched() {
  const movieContex = useMovieContext();
  return (
    <div className="watch-list px-5 md:px-[50px] text-white">
      <div className="container mx-auto">
        <div className="main-heading flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold h-12">My watched</h1>
          <span className="movie-count bg-primary text-gray-400 font-light py-1.5 px-4 rounded-full">
            {movieContex.watched.length}
            {movieContex.watched.length === 1 ? " movie" : " movies"}
          </span>
        </div>
        {movieContex.watched.length > 0 ? (
          <div className="Movie-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {movieContex.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="text-3xl font-extrabold text-(--text-muted) absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            No movies in your list, add some 🎬
          </h2>
        )}
      </div>
    </div>
  );
}

export default Wathched;
