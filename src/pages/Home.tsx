import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="grid home-hero">
      <div className="absolute inset-0 bg-black bg- bg-opacity-60 flex flex-col items-center justify-center px-4 text-center">
        <div className="grid gap-6">
          <blockquote className="text-center text-2xl text-white">
            “You will eat less than you desire and more than you deserve.”
          </blockquote>
          <button className="button btn-primary mx-auto">
            <Link to="/menu">Explore the Menu</Link>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home
