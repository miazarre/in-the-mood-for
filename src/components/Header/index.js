import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <Link to="/">
                    <h1 className="sans text-neutral-50 text-7xl font-extrabold uppercase text-center hover:text-rose-900 pt-40">
                    In the Mood for
                    </h1>
                </Link>
            </div>
        </>
    )
}

export default Header;