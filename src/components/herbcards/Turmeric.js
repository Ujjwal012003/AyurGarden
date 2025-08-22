import React, { useEffect } from 'react';
import Navbar from '../Navbar3';
import turmeric from './images/turmeric.png';
import { Link } from 'react-router-dom';

function Turmeric() {
    useEffect(() => {
        // Scroll to top when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl font-bold text-center text-customColor mb-8 mt-16">Turmeric in Ayurveda</h1>

                    {/* Turmeric Image */}
                    <div className="flex justify-center mb-8">
                        <img src={turmeric} alt="Turmeric" className="w-72 h-72 rounded-full shadow-lg" />
                    </div>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Sanskrit Name</h2>
                            <p className="mt-2 text-lg">Turmeric is known as <strong>Haridra</strong> (हरिद्र) in Sanskrit.</p>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Medicinal Name</h2>
                            <p className="mt-2 text-lg">The scientific name of Turmeric is <strong>Curcuma longa</strong>.</p>
                        </div>

                        {/* Section 3: Importance in Ayurveda */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Importance in Ayurveda</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Anti-inflammatory:</strong> Potent anti-inflammatory properties help manage conditions like arthritis.</li>
                                <li><strong>Antioxidant:</strong> Neutralizes free radicals and protects the body from oxidative stress.</li>
                                <li><strong>Tridoshic:</strong> Balances all three doshas (Vata, Pitta, and Kapha) when used in moderation.</li>
                            </ul>
                        </div>

                        {/* Section 4: Uses */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Uses</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Digestive Health:</strong> Stimulates bile production and improves gut health, alleviating bloating and gas.</li>
                                <li><strong>Immune Support:</strong> Boosts the immune system and helps fight infections.</li>
                                <li><strong>Skin Health:</strong> Treats acne, eczema, and psoriasis; promotes wound healing and skin complexion.</li>
                                <li><strong>Heart Health:</strong> Supports cardiovascular health by improving blood circulation and reducing cholesterol.</li>
                                <li><strong>Pain Relief:</strong> Relieves pain associated with arthritis and muscle strains due to its anti-inflammatory properties.</li>
                            </ul>
                        </div>

                        {/* Section 5: Fun Fact */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Fun Fact</h2>
                            <p className="mt-4 text-lg">
                                Turmeric has been used for over 4,000 years and is a key ingredient in many Ayurvedic formulations, including **Golden Milk**. It is also considered a sacred herb and is often used in rituals for its purifying properties.
                            </p>
                            <p className="mt-2 text-lg">
                                Turmeric is consumed as a spice in cooking, and in powdered form, capsules, or tinctures for its health benefits.
                            </p>
                        </div>

                        {/* Section 6: 3D Model */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor text-center">3D Model</h2>
                            <div className="mt-4 flex justify-center">
                                <iframe 
                                    title="Turmeric" 
                                    src="https://sketchfab.com/models/4109217edc144af397889e93d2bd5268/embed" 
                                    className="w-full h-96 max-w-4xl rounded-lg shadow-lg" 
                                    allow="autoplay; fullscreen; xr-spatial-tracking">
                                </iframe>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Link to="/TurmericQuiz">
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

export default Turmeric;
