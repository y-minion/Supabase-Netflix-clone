import { getMovie } from "actions/movieActions";
import UI from "./ui";

export default async function MovieDtail({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const movie = await getMovie(id);

  return (
    <main className="py-16 flex items-center bg-blue-50 w-full absolute top-0 bottom-0 left-0 right-0">
      {movie ? <UI movie={movie} /> : <div>Movie does not exists</div>}
    </main>
  );
}
