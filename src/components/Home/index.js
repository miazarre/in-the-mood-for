import { Link } from "react-router-dom";

const Home = () => {
    return(
    <>
        <div className="flex flex-col items-center justify-center">
            <p className="my-10 mx-10 text-neutral-50 text-4xl font-bold text-center">
                An exquisite selection of movies and series, to spend an evening, an afternoon, or just a moment of experience. 
                TW : this is only based on my personal taste.
            </p>
            <a href="sencritique.com" className="text-neutral-50 my-10 hover:text-teal-200">For more ideas : senscritique.com</a> 
        <div>
        <div className="menu flex justify-between gap-x-40 text-5xl">
            <div className="menu-item">
            <Link to='/moods/love'className="text-white hover:text-fuchsia-500">Love</Link>
            </div>
            <div className="menu-item">
            <Link to='/moods/space'className="text-white hover:text-blue-600">Space</Link>
            </div>
            <div className="menu-item">
            <Link to='/moods/rage' className="text-white hover:text-red-500">Rage</Link>
            </div>
            <div className="menu-item">
            <Link to='/moods/unsual' className="text-white hover:text-lime-400">Unsual</Link>
            </div>
            <div className="menu-item">
            <Link to='/moods/laugh' className="text-white hover:text-orange-600">Laugh</Link>
            </div>
            <div className="menu-item">
            <Link to='/moods/tears' className="text-white hover:text-sky-500">Tears</Link>
            </div>
            <div className="menu-item">
            <Link to='/moods/fear' className="text-white hover:text-purple-800">Fear</Link>
            </div><div className="menu-item">
            <Link to='/moods/something' className="text-white hover:text-rose-400">Something</Link>
            </div>
        </div>
    </div>
    </div> 
    </>
   
    )
}

export default Home;