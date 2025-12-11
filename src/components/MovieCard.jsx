import MovieControls from "./MovieControls";

function MovieCard({ movie, type }) {
  return (
    <div className="movie-card group relative rounded-lg overflow-hidden shadow-md bg-[#262626] transition transform hover:scale-105">
      {movie.Poster && movie.Poster !== "N/A" ? (
        <img
          className="w-full h-90 object-cover"
          src={movie.Poster}
          alt={movie.Title}
        />
      ) : (
        <div className="w-full h-80 bg-gray-700"></div>
      )}
      <MovieControls movie={movie} type={type} />
    </div>
  );
}

export default MovieCard;
