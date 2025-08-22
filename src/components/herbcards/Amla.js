import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import Navbar from '../Navbar3';
import amla from './images/amla.png';

function Amla() {
    useEffect(() => {
        // Scroll to top when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl font-bold text-center text-customColor mb-8 mt-16">Amla in Ayurveda</h1>

                    {/* Amla Image */}
                    <div className="flex justify-center mb-8">
                        <img src={amla} alt="Amla" className="w-72 h-72 rounded-full shadow-lg" />
                    </div>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Sanskrit Name</h2>
                            <p className="mt-2 text-lg">Amla is known as <strong>Amalaki</strong> (आमलकी) in Sanskrit.</p>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Medicinal Name</h2>
                            <p className="mt-2 text-lg">The scientific name of Amla is <strong>Phyllanthus emblica</strong> or <strong>Emblica officinalis</strong>.</p>
                        </div>

                        {/* Section 3: Importance in Ayurveda */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Importance in Ayurveda</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Tridoshic:</strong> Balances all three doshas (Vata, Pitta, Kapha).</li>
                                <li><strong>Rich in Vitamin C:</strong> Supports immune function, skin health, and detoxification.</li>
                                <li><strong>Rejuvenating (Rasayana):</strong> Promotes longevity, enhances vitality, and boosts overall health.</li>
                                <li><strong>Digestive Tonic:</strong> Nourishes the digestive tract and improves digestion.</li>
                                <li><strong>Antioxidant and Anti-aging:</strong> Helps fight free radicals and reduces oxidative stress.</li>
                            </ul>
                        </div>

                        {/* Section 4: Fun Fact */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Fun Fact</h2>
                            <p className="mt-4 text-lg">
                                Amla is associated with the mythological story of the "Churning of the Ocean" (Samudra Manthan) in Hindu texts, where it is believed that Amla was created as a divine fruit to promote longevity and vitality.
                            </p>
                            <p className="mt-2 text-lg">
                                Amla is one of the key ingredients in <strong>Chyawanprash</strong>, a famous Ayurvedic tonic used for boosting immunity and vitality!
                            </p>
                        </div>

                        {/* Section 5: 3D Model */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor text-center">3D Model</h2>
                            <div className="mt-4 flex justify-center">
                                <iframe 
                                    title="Amla 3D Model" 
                                    src="https://sketchfab.com/models/a5857dd0b18b4bc283ee28bf5097eb6c/embed" 
                                    className="w-full h-96 max-w-4xl rounded-lg shadow-lg" 
                                    allow="autoplay; fullscreen; xr-spatial-tracking">
                                </iframe>
                            </div>
                        </div>

                        {/* Quiz Button */}
                        <div className="flex justify-center mt-8">
                            <Link to="/AmlaQuiz">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                    Take the Amla Quiz
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Amla;
