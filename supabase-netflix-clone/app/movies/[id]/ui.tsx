"use client";

export default function UI({ movie }) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={movie.image_url} className="w-1/3" />
      <div className="flex flex-col w-full md:w-2/3 p-6 gap-4 items-center md:items-start">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="font-bold text-lg">
          <i className="fas fa-star mr-1" />
          Vote Average : {movie.vote_average}
        </div>
        <div className="font-bold text-lg">Popularity: {movie.popularity}</div>
        <div className="font-bold text-lg">
          Release Date: {movie.release_date}
        </div>
      </div>
    </div>
  );
}
