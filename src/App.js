import './index.css';

export default function App() {
  return (
  <div className="bg-customBackground h-screen">
    <div className="mt-15 flex flex-col items-center justify-center h-full">
        <h1 className="text-neutral-50 text-7xl font-bold uppercase text-center">
          In the Mood for
        </h1>
          <p className="my-10 mx-10 text-neutral-50 text-4xl font-bold text-center">
            An exquisite selection of movies and series, to spend an evening, an afternoon, or just a moment of experience. 
            TW : this is only based on my personal taste.
          </p>
          <a href='https://www.senscritique.com/' className="text-neutral-50 my-10 hover:text-teal-200">For more ideas : senscritique.com</a> 
        <div>
            <div className="menu flex justify-between gap-x-40 mx-15 text-5xl">
              <div className="menu-item">
                <a href='https://www.senscritique.com/'className="text-white hover:text-fuchsia-500">Love</a>
              </div>
              <div className="menu-item">
                <a href='https://www.senscritique.com/'className="text-white hover:text-blue-600">Space</a>
              </div>
              <div className="menu-item">
                <a href='https://www.senscritique.com/' className="text-white hover:text-red-500">Rage</a>
              </div>
              <div className="menu-item">
                <a href='https://www.senscritique.com/' className="text-white hover:text-lime-400">Unsual</a>
              </div>
              <div className="menu-item">
                <a href='https://www.senscritique.com/' className="text-white hover:text-orange-600">Laugh</a>
              </div>
              <div className="menu-item">
                <a href='https://www.senscritique.com/' className="text-white hover:text-sky-500">Tears</a>
              </div>
              <div className="menu-item">
                <a href='https://www.senscritique.com/' className="text-white hover:text-purple-800">Fear</a>
              </div><div className="menu-item">
                <a href='https://www.senscritique.com/' className="text-white hover:text-rose-400">Something</a>
              </div>
           </div>
        </div>
    </div> 
  </div>
  )
}
