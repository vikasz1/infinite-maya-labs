import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>

        <title>Infinite Maya Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main>
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Infinite Maya Labs</h2>
            <p className="text-xl mb-8">Discover and explore the games I've created.</p>
            <a href="#" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold">Explore Games</a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/images/chemistry-hero.jpg" alt="NCERT Chemistry Practicals Simulation" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">NCERT Chemistry Practicals Simulation</h3>
              <p className="text-gray-600">An interactive lab simulation game that allows CBSE students to perform NCERT chemistry practicals in a virtual environment.</p>
              <a href="#" className="text-blue-500 mt-4 block">Learn More</a>
            </div>
            {/* Add more game cards as needed */}
          </div>
        </section>

        <section className="bg-gray-200 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">I am a passionate indie game developer with a love for creating unique and engaging games...</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Newsletter Signup</h2>
          <p className="text-gray-700 mb-8">Stay updated with the latest game releases and news.</p>
          <form className="max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="w-full p-4 mb-4 rounded-md border border-gray-300" />
            <button type="submit" className="w-full bg-blue-500 text-white px-6 py-4 rounded-md font-semibold">Subscribe</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 My Indie Games. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2">Facebook</a>
            <a href="#" className="mx-2">Twitter</a>
            <a href="#" className="mx-2">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
