import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Link to="/">
          <h1 className="text-center pt-40 sans text-7xl font-extrabold uppercase text-neutral-50 hover:text-rose-900">
            In the Mood for
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
