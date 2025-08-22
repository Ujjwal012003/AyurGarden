import React, { useEffect } from 'react';
import Navbar from '../Navbar3';
import neem from './images/neem.png';
import { Link } from 'react-router-dom';
function Neem() {
    useEffect(() => {
        // Scroll to top when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl font-bold text-center text-customColor mb-8 mt-16">Neem in Ayurveda</h1>

                    {/* Neem Image */}
                    <div className="flex justify-center mb-8">
                        <img src={neem} alt="Neem" className="w-72 h-72 rounded-full shadow-lg" />
                    </div>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Sanskrit Name</h2>
                            <p className="mt-2 text-lg">Neem is known as <strong>Nimba</strong> (निम्ब) in Sanskrit.</p>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Medicinal Name</h2>
                            <p className="mt-2 text-lg">The scientific name of Neem is <strong>Azadirachta indica</strong>.</p>
                        </div>

                        {/* Section 3: Importance in Ayurveda */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Importance in Ayurveda</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Detoxifying Agent:</strong> Known for its purifying qualities, helping to cleanse the body of toxins and impurities.</li>
                                <li><strong>Tridoshic Balancer:</strong> Primarily associated with balancing Pitta and Kapha doshas.</li>
                                <li><strong>Antimicrobial Properties:</strong> Possesses strong antimicrobial, antifungal, and antiviral properties.</li>
                            </ul>
                        </div>

                        {/* Section 4: Uses */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Uses</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Skin Health:</strong> Used in topical applications to treat skin conditions like acne, eczema, and psoriasis.</li>
                                <li><strong>Oral Health:</strong> Neem twigs are traditionally used as natural toothbrushes (datun) due to their antibacterial effects.</li>
                                <li><strong>Blood Purification:</strong> Believed to purify the blood, beneficial for detoxification and enhancing skin health.</li>
                                <li><strong>Digestive Aid:</strong> Supports digestive health by alleviating bloating and constipation.</li>
                                <li><strong>Immune Support:</strong> Rich in antioxidants, helps bolster the immune system.</li>
                            </ul>
                        </div>

                        {/* Section 5: Fun Fact */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Fun Fact</h2>
                            <p className="mt-4 text-lg">
                                Neem is often referred to as the "Village Pharmacy" due to its extensive range of medicinal uses. Every part of the Neem tree—leaves, bark, seeds, and flowers—has therapeutic benefits.
                            </p>
                            <p className="mt-2 text-lg">
                                Neem can be consumed in various forms, including fresh leaves, powdered supplements, teas, and oils.
                            </p>
                        </div>

                        {/* Section 6: 3D Model */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor text-center">3D Model</h2>
                            <div className="mt-4 flex justify-center">
                                <iframe 
                                    title="Neem Tree" 
                                    src="https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed" 
                                    className="w-full h-96 max-w-4xl rounded-lg shadow-lg" 
                                    allow="autoplay; fullscreen; xr-spatial-tracking">
                                </iframe>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Link to="/NeemQuiz">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                    Take the Neem Quiz
                                </button>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Neem;
