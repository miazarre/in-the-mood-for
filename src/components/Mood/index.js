import { useParams } from 'react-router-dom';

import moviesData from '../../data/allMovies.json';
const Mood=() => {

const {mood} = useParams();
const filteredMovies = moviesData.filter(movie => movie.moods.includes(mood));

    return (
    <div className="sans text-neutral-50">
      <h1 className="text-9xl font-extrabold uppercase text-center hover:text-yellow-300 pt-20 ">{mood}</h1>
      <div className="flex flex-wrap justify-center items-center">
        {filteredMovies.map(movie => (
          <div key={movie.id}  className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-8 flex flex-col items-center ">
                <img className="w-50 h-45 rounded-full"alt='Movie Poster' src={movie.image}/>
                <div className="px-6 py-4">
                <h2 className= "text-3xl font-extrabold text-center" >{movie.title}</h2>
                <p className="text-xl text-center">{movie.description}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
        }


export default Mood;