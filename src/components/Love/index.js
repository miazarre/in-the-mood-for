import moviesData from '../../data/allMovies.json';
//import moods from '../..moods.json';

const Love=() => {

const filteredMovies = moviesData.filter(movie => movie.moods.includes("love"));

    return (
    <div>
      <h1 className="text-teal-200 text-4xl ">Love</h1>
      <ul className="text-teal-400 text-4xl">
        {filteredMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
        }


export default Love;