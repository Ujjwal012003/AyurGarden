import React, { useEffect } from 'react';
import Navbar from '../Navbar3';
import ginger from './images/ginger.png';
import { Link } from 'react-router-dom';

function Ginger() {
    useEffect(() => {
        // Scroll to top when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl font-bold text-center text-customColor mb-8 mt-16">Ginger in Ayurveda</h1>

                    {/* Ginger Image */}
                    <div className="flex justify-center mb-8">
                        <img src={ginger} alt="Ginger" className="w-72 h-72 rounded-full shadow-lg" />
                    </div>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Sanskrit Name</h2>
                            <p className="mt-2 text-lg">Ginger is known as <strong>Vishwabhesaj</strong> (विश्वभेषज) or <strong>Shunti</strong> (शुंठि) in Sanskrit.</p>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Medicinal Name</h2>
                            <p className="mt-2 text-lg">The scientific name of Ginger is <strong>Zingiber officinale</strong>.</p>
                        </div>

                        {/* Section 3: Importance in Ayurveda */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Importance in Ayurveda</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Digestive Aid:</strong> Stimulates digestion, relieves nausea, and reduces bloating.</li>
                                <li><strong>Anti-inflammatory:</strong> Effective in managing pain and inflammation, particularly in arthritis.</li>
                                <li><strong>Tridoshic:</strong> Balances Vata and Kapha doshas; can also help with Pitta in moderation.</li>
                            </ul>
                        </div>

                        {/* Section 4: Uses */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Uses</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Nausea Relief:</strong> Alleviates nausea and vomiting, especially in motion sickness and pregnancy.</li>
                                <li><strong>Immune Support:</strong> Antioxidant and antimicrobial properties boost the immune system.</li>
                                <li><strong>Respiratory Health:</strong> Treats coughs, colds, and sinusitis; expels mucus.</li>
                                <li><strong>Pain Management:</strong> Relieves headaches, muscle soreness, and joint pain.</li>
                                <li><strong>Blood Circulation:</strong> Promotes healthy blood circulation and can lower blood pressure.</li>
                            </ul>
                        </div>

                        {/* Section 5: Fun Fact */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Fun Fact</h2>
                            <p className="mt-4 text-lg">
                                Ginger has been used in traditional medicine for over 2,000 years and is often referred to as "the spice of life." It is a key ingredient in many Ayurvedic formulations, commonly found in teas and herbal remedies.
                            </p>
                            <p className="mt-2 text-lg">
                                Ginger is part of the popular Ayurvedic preparation known as **Trikatu**, which enhances digestion and metabolism.
                            </p>
                        </div>

                        {/* Section 6: 3D Model */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor text-center">3D Model</h2>
                            <div className="mt-4 flex justify-center">
                                <iframe 
                                    title="Red Ginger" 
                                    src="https://sketchfab.com/models/227bc5096d8e4d76a450c01b25328967/embed" 
                                    className="w-full h-96 max-w-4xl rounded-lg shadow-lg" 
                                    allow="autoplay; fullscreen; xr-spatial-tracking">
                                </iframe>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Link to="/GingerQuiz">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                    Take the Turmeric Quiz
                                </button>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ginger;
