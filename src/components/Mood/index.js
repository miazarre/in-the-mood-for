import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import moviesData from '../../data/allMovies.json';

const Mood=() => {

const {mood} = useParams();
const filteredMovies = moviesData.filter(movie => movie.moods.includes(mood));

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

    return (
    <div className="sans text-neutral-50">
      <h1 className="text-9xl font-extrabold uppercase text-center hover:text-yellow-300 pt-20 ">{mood}</h1>
      <Slider {...sliderSettings}>
        {filteredMovies.map(movie => (
          <div key={movie.id}  className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-8 flex flex-col items-center">
            <div className="w-50 h-45 flex justify-center items-center">
                <img className="w-45 h-40 rounded"alt='Movie Poster' src={movie.image}/>
            </div>
                <div className="px-6 py-4">
                <h2 className= "text-3xl font-extrabold text-center" >{movie.title}</h2>
                <p className="text-xl text-center">{movie.description}</p>
                </div>
          </div>
        ))}
      </Slider>
    </div>
  );
        }


export default Mood;