import React, { useEffect } from 'react';
import Navbar from '../Navbar3';
import moringa from './images/moringa.png';
import { Link } from 'react-router-dom';


function Moringa() {
    useEffect(() => {
        // Scroll to top when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl font-bold text-center text-customColor mb-8 mt-16">Moringa in Ayurveda</h1>

                    {/* Moringa Image */}
                    <div className="flex justify-center mb-8">
                        <img src={moringa} alt="Moringa" className="w-72 h-72 rounded-full shadow-lg" />
                    </div>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Sanskrit Name</h2>
                            <p className="mt-2 text-lg">Moringa is known as <strong>Drumstick Tree (Sahajan)</strong> (सहजन) in Sanskrit.</p>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Medicinal Name</h2>
                            <p className="mt-2 text-lg">The scientific name of Moringa is <strong>Moringa oleifera</strong>.</p>
                        </div>

                        {/* Section 3: Importance in Ayurveda */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Importance in Ayurveda</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Nutritional Powerhouse:</strong> Rich in vitamins, minerals, and antioxidants, supporting various bodily functions.</li>
                                <li><strong>Tridoshic:</strong> Balances all three doshas (Vata, Pitta, and Kapha) when used appropriately.</li>
                                <li><strong>Anti-inflammatory:</strong> Contains compounds with anti-inflammatory properties to reduce inflammation.</li>
                            </ul>
                        </div>

                        {/* Section 4: Uses */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Uses</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Nutritional Support:</strong> Provides essential nutrients like vitamins A, C, and K, calcium, iron, and protein.</li>
                                <li><strong>Immune Boosting:</strong> High antioxidant content strengthens the immune system.</li>
                                <li><strong>Blood Sugar Regulation:</strong> Helps lower blood sugar levels, beneficial for diabetes management.</li>
                                <li><strong>Digestive Health:</strong> Aids digestion, alleviates constipation and bloating.</li>
                                <li><strong>Skin and Hair Health:</strong> Moringa oil is used in skincare and hair care for moisturizing and nourishing.</li>
                            </ul>
                        </div>

                        {/* Section 5: Fun Fact */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Fun Fact</h2>
                            <p className="mt-4 text-lg">
                                Moringa is sometimes called the "Miracle Tree" due to its incredible versatility and wide range of health benefits. Its leaves, seeds, pods, and flowers can be consumed and utilized in various culinary and medicinal preparations.
                            </p>
                            <p className="mt-2 text-lg">
                                Moringa can be consumed in various forms, including fresh leaves, powdered supplements, teas, and oils.
                            </p>
                        </div>

                        {/* Section 6: 3D Model */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor text-center">3D Model</h2>
                            <div className="mt-4 flex justify-center">
                                <iframe 
                                    title="Moringa" 
                                    src="https://sketchfab.com/models/8807f88d6c9f45ba8c90cb6a7a0d2956/embed" 
                                    className="w-full h-96 max-w-4xl rounded-lg shadow-lg" 
                                    allow="autoplay; fullscreen; xr-spatial-tracking">
                                </iframe>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Link to="/MoringaQuiz">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                    Take the Moringa Quiz
                                </button>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Moringa;
