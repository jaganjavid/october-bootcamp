import Card from "../components/Card";
import useFetch from "../hooks/useFetch";


const MovieList = ({apiPath}) => {

  const {data:movies} = useFetch(apiPath);
  
  return (
    <main>
       <section className="max-w-6xl py-7 m-auto">
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
           {movies.map((movie) => (
            // <h1>{movie.title}</h1>
            <Card key={movie.id} movie={movie}/>
           ))}
         </div>
      </section> 
    </main>
  )
}

export default MovieList