import { getMovie } from "actions/movieActions";
import UI from "./ui";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const { title, overview, image_url } = await getMovie(Number(id));
  return {
    title,
    description: overview,
    openGraph: {
      images: [image_url],
    },
  };
}

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
