import React from 'react';

const ResultCard = ({ movie }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <div className="flex">
        {movie.poster_path ? (
          <img
            className="w-40 h-60 object-cover"
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        ) : (
          <div className="w-40 h-60 border-2 bg-gray-600 flex justify-center items-center font-krm">Fotoğraf Bulunamadı</div>
        )}
        <div className="flex flex-col justify-between ml-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{movie.title}</div>
            <p className="text-gray-700 text-base mb-4 font-krm">
              Yapım Tarihi: {movie.release_date ? movie.release_date.substring(0,4) : "Tarih Bilgisi Yok!"}
            </p>
            <p className="text-gray-700 text-base font-krm">
              IMDB Puanı: {movie.vote_average ? movie.vote_average : " IMDB Bilgisi Yok!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
