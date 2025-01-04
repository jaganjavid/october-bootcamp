import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl m-auto px-5 py-5">
        <p className="text-3xl text-gray-800">
          {movies.length === 0
            ? `No result found for (${queryTerm})`
            : `Result for (${queryTerm})`}
        </p>
      </section>

      <section className="max-w-7xl m-auto px-5 py-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;
