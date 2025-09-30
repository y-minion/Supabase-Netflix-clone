"use client";

import { useQuery } from "@tanstack/react-query";
import MovieCard from "./movie-card";
import { Spinner } from "@material-tailwind/react";
import { searchMovies } from "actions/movieActions";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);
  const getAllMoviesQuery = useQuery({
    queryKey: ["movie", search], //queryKey에 search 값이 변경될때마다 새로운 값을 넣어 줘야 실제로 검색 값이 변경 될 때마다 새롭게 데이터 패칭을 실행한다.
    queryFn: () => searchMovies(search),
  });
  return (
    <div className="grid gap-1 grid-cols-3 md:grid-cols-4 w-full h-full">
      {getAllMoviesQuery.isLoading && <Spinner />}
      {getAllMoviesQuery.data &&
        getAllMoviesQuery.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
