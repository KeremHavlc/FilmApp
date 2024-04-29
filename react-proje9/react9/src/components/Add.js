import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import ResultCart from './ResultCart';

const Add = ({ movie }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { watchlist, addMovieToWatchList, addMovieToWatched} = useContext(GlobalContext);

  function isMovieInWatchlist(movieId) {
    return watchlist.some(item => item.id === movieId);
  }
 
  function onChange(e) {
    setQuery(e.target.value)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=113dbc658c2a9d1250a03fb1238a5b51&include_adult=false&language=en-US&page=1&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results)
        } else {
          setResults([]);
        }
      })
  }

  return (
    <div className='bg-gradient-to-r from-red-700 to-blue-700 min-h-screen flex justify-center items-center '>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center pt-8'>
          <div className='bg-white rounded-lg p-8 shadow-lg w-full md:w-1/2'>
            <h1 className='text-2xl font-bold text-center mb-8 font-krm'>Hoşgeldiniz</h1>
            <input onChange={onChange} type="text" placeholder='Film, Dizi veya Kişi Arayınız...' value={query} className='mb-6 w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500 font-krm' />
            {results.length > 0 && (
              <ul className="w-full">
                {results.map((resultMovie) => (
                  <li key={resultMovie.id} className="flex items-center justify-between mb-4 font-krm">
                    <ResultCart movie={resultMovie} />
                    <div className="flex flex-col">
                      <button disabled={isMovieInWatchlist(resultMovie.id)} onClick={() => addMovieToWatchList(resultMovie)} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 transition duration-500 font-krm">
                        İzleme Listesine Ekle
                      </button>
                      <button onClick={() => {
                        addMovieToWatched(resultMovie); 
                       
                      }} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded font-krm transition duration-500">
                        İzlendi Olarak İşaretle
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
