import Head from 'next/head';
import Link from 'next/link';

export default function Games() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>NCERT Chemistry Practicals Simulation - My Indie Games</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <main>
                <section className="container mx-auto px-4 py-16">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <img src="/images/lab-banner.png" alt="NCERT Chemistry Practicals Simulation" className="w-full h-64 object-cover rounded-md mb-4" />
                        <h2 className="text-3xl font-bold mb-4">NCERT Chemistry Practicals Simulation</h2>
                        <p className="text-gray-700 mb-4">An interactive lab simulation game that allows CBSE students to perform NCERT chemistry practicals in a virtual environment.</p>
                        <p className="text-gray-700 mb-4">This game provides a realistic and safe platform for students to learn and perform chemistry experiments. With step-by-step instructions and virtual lab equipment, students can enhance their practical knowledge and skills.</p>
                        <p className="text-gray-700 mb-4">Features:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Interactive lab environment</li>
                            <li>Detailed experiment instructions</li>
                            <li>Realistic lab equipment</li>
                            <li>Safe and controlled environment</li>
                        </ul>
                        <Link href="#" className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold">Download Now</Link>
                    </div>
                </section>
                <div className="container mx-auto px-4 py-16 text-center">

                    <Link href="/games" className="text-blue-500 font-semibold">Back to Games</Link>

                </div>
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
