import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import moviesData from '../../data/allMovies.json';

const Mood = () => {
  const { mood } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.moods.includes(mood)
    );
    setMovies(filteredMovies);
  }, [mood]);

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>In the mood for {mood}</title>
      </Helmet>
      <div className="sans text-neutral-50">
        <h1 className="text-center text-4xl sm:text-9xl font-extrabold uppercase hover:text-slate-600 pt-10 sm:pt-20">
          {mood}
        </h1>
        <Slider {...sliderSettings} className="mx-2 sm:mx-4 my-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="max-w-xs sm:max-w-sm flex flex-col items-center mx-2 sm:mx-4 my-4 sm:my-8 rounded overflow-hidden shadow-lg"
            >
              <div className="flex justify-center items-center w-full h-48 sm:h-56">
                <img
                  className="object-contain h-full"
                  alt="Movie Poster"
                  src={movie.image}
                />
              </div>
              <div className="px-4 py-2 sm:px-6 sm:py-4">
                <h2 className="text-center text-lg sm:text-3xl font-extrabold">
                  {movie.title}
                </h2>
                <p className="text-center text-base sm:text-xl">
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Mood;
