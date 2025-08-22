import React, { useEffect } from 'react';
import Navbar from '../Navbar3';
import { Link } from 'react-router-dom';
import tulsi from './images/tulsi.png';

function Tulsi() {
    useEffect(() => {
        // Scroll to top when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl font-bold text-center text-customColor mb-8 mt-16">Tulsi in Ayurveda</h1>

                    {/* Tulsi Image */}
                    <div className="flex justify-center mb-8">
                        <img src={tulsi} alt="Tulsi" className="w-72 h-72 rounded-full shadow-lg" />
                    </div>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Sanskrit Name</h2>
                            <p className="mt-2 text-lg">Tulsi is known as <strong>Tulsi</strong> (तुलसी) in Sanskrit.</p>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Medicinal Name</h2>
                            <p className="mt-2 text-lg">The scientific name of Tulsi is <strong>Ocimum sanctum</strong> or <strong>Ocimum tenuiflorum</strong>.</p>
                        </div>

                        {/* Section 3: Importance in Ayurveda */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Importance in Ayurveda</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Adaptogen:</strong> Helps the body adapt to stress and promotes overall balance.</li>
                                <li><strong>Tridoshic:</strong> Balances Kapha and Vata while mildly pacifying Pitta.</li>
                                <li><strong>Immunity Booster:</strong> Boosts immunity and protects the body from infections.</li>
                            </ul>
                        </div>

                        {/* Section 4: Uses */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Uses</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Respiratory Health:</strong> Manages respiratory issues such as colds, coughs, bronchitis, and asthma.</li>
                                <li><strong>Immunity Booster:</strong> Strengthens the immune system and helps fight off infections.</li>
                                <li><strong>Anti-inflammatory & Antioxidant:</strong> Reduces inflammation and neutralizes free radicals.</li>
                                <li><strong>Digestive Health:</strong> Improves digestion and soothes stomach cramps.</li>
                                <li><strong>Mental Clarity:</strong> Reduces stress and promotes mental clarity and emotional balance.</li>
                                <li><strong>Skin Care:</strong> Useful for treating skin conditions like acne and rashes.</li>
                            </ul>
                        </div>

                        {/* Section 5: Fun Fact */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Fun Fact</h2>
                            <p className="mt-4 text-lg">
                                Tulsi is considered sacred in Hinduism, and many Indian households keep a Tulsi plant in their courtyard.
                            </p>
                            <p className="mt-2 text-lg">
                                In Ayurveda, Tulsi is often consumed as a tea, mixed with honey, or used in herbal formulations.
                            </p>
                        </div>

                        {/* Section 6: 3D Model */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor text-center">3D Model</h2>
                            <div className="mt-4 flex justify-center">
                                <iframe 
                                    title="Tulsi (Holy Basil) Tree" 
                                    src="https://sketchfab.com/models/c604e8f52c234f2e9259d895fe028819/embed" 
                                    className="w-full h-96 max-w-4xl rounded-lg shadow-lg" 
                                    allow="autoplay; fullscreen; xr-spatial-tracking">
                                </iframe>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Link to="/TulsiQuiz">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                    Take the Tulsi Quiz
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tulsi;
