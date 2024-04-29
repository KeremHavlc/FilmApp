import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const WatchList = () => {
  const { watchlist,addMovieToWatched,removeMovieFromWatchList } = useContext(GlobalContext);

  const calculateCardWidth = (title) => {
    let width = 40;
    if (title.length > 20) {
      width += (title.length - 20);
    }
    return `${width}rem`;
  };

  return (
    <div>
      {watchlist.length > 0 ? (
        <div className="flex flex-wrap justify-center bg-gradient-to-r from-red-700 to-blue-700 min-h-screen">
           <div className="absolute top-0 right-0 m-2 bg-blue-500 text-white font-semibold px-2 py-1 rounded-full cursor-pointer mt-20 font-krm">
                  {watchlist.length} {watchlist.length < 2 ? "Movie" : "Movies"}
                </div>
          {watchlist.map((movie) => (
            <div key={movie.id} className="flex justify-center items-center m-4">
              <div className="relative">
               
              </div>
              <div className="max-w-xs rounded overflow-hidden shadow-lg" style={{ width: calculateCardWidth(movie.title) }}>
                <div className="relative">
                  {movie.poster_path ? (
                    <img
                      className="w-40 h-60 object-cover"
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt={`${movie.title}`}
                    />
                  ) : (
                    <div className="w-40 h-60 border-2 bg-gray-600 flex justify-center items-center">Fotoğraf Bulunamadı</div>
                  )}
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                    <button onClick={() => addMovieToWatched(movie)} className="bg-blue-500 hover:bg-blue-700 text-white font-krm font-bold py-2 px-4 rounded mr-2">İzlendi</button>
                    <button onClick={() => removeMovieFromWatchList(movie.id)} className="bg-red-500 hover:bg-red-700 text-white font-krm font-bold py-2 px-4 rounded">Sil</button>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 font-krm">{movie.title}</div>
                  <p className="text-gray-700 text-base mb-4 font-krm">
                    Yapım Tarihi: {movie.release_date ? movie.release_date.substring(0, 4) : "Tarih Bilgisi Yok!"}
                  </p>
                  <p className="text-gray-700 text-base font-krm">
                    IMDB Puanı: {movie.vote_average ? movie.vote_average : " IMDB Bilgisi Yok!"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='bg-gradient-to-r from-red-700 to-blue-700 flex justify-center items-center min-h-screen shadow-xl font-krm transition duration-500 hover:shadow-2xl'>
        <div className="border rounded-xl p-4 flex justify-center items-center text-center font-krm">
          <h3>Listenizde Öğe Bulunmamaktadır!</h3>
        </div>
      </div>
      
      )}
      
    </div>
  );
};

export default WatchList;
