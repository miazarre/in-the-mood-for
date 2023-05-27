import { Link } from 'react-router-dom';

import errorGif from '../../assets/error.gif';

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={errorGif} alt="Error GIF" />
        <Link to="/">
          <h2 className="text-center pt-20 sans text-7xl font-extrabold uppercase text-neutral-50 hover:text-rose-300">
            Go home, you're drunk
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Error;
