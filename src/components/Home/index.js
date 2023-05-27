import { Link } from 'react-router-dom';

import moodsData from '../../data/moods.json';


const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center my-10 mx-10 text-4xl font-bold text-neutral-50 ">
          An exquisite selection of movies and series, to spend an evening, an
          afternoon, or just a moment of experience. TW : this is only based on
          my personal taste.
        </p>
        <a
          href="sencritique.com"
          className="my-10 text-neutral-50 hover:text-teal-200"
        >
          For more ideas : senscritique.com
        </a>
        <div>
          <div className="menu flex justify-between gap-x-40 text-5xl">
            {moodsData.map((mood) => (
              <div className="menu-item" key={mood.id}>
                <Link
                  to={`/moods/${mood.name}`}
                  className={`text-white hover:text-${mood.color}`}
                >
                  {mood.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
