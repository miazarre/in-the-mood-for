import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import errorGif from '../../assets/error.gif';

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <img src={errorGif} alt="Error GIF" />
        <Link to="/" className="mt-10">
          <h2 className="text-center pt-10 sans text-4xl sm:text-7xl font-extrabold uppercase text-neutral-50 hover:text-rose-300">
            Go home, you're drunk
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Error;
