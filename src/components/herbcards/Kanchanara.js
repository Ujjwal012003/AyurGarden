import React, { useEffect } from 'react';
import Navbar from '../Navbar3';
import kanchanara from './images/bauhinia.png';
import { Link } from 'react-router-dom';

function Kanchanara() {
    useEffect(() => {
        // Scroll to top when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl font-bold text-center text-customColor mb-8 mt-16">Kanchanara in Ayurveda</h1>

                    {/* Kanchanara Image */}
                    <div className="flex justify-center mb-8">
                        <img src={kanchanara} alt="Kanchanara" className="w-72 h-72 rounded-full shadow-lg" />
                    </div>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Sanskrit Name</h2>
                            <p className="mt-2 text-lg">Kanchanara is known as <strong>Kanchanara</strong> (कांचनार) in Sanskrit.</p>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Medicinal Name</h2>
                            <p className="mt-2 text-lg">The scientific name of Kanchanara is <strong>Bauhinia variegata</strong>.</p>
                        </div>

                        {/* Section 3: Importance in Ayurveda */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Importance in Ayurveda</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Lymphatic Cleanser:</strong> Effective in cleansing the lymphatic system, aiding detoxification.</li>
                                <li><strong>Kapha-Pacifying:</strong> Helps reduce glandular swelling, cysts, and goiters.</li>
                                <li><strong>Blood Purifier:</strong> Acts as a blood purifier, treating skin conditions and promoting detoxification.</li>
                            </ul>
                        </div>

                        {/* Section 4: Uses */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Uses</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li><strong>Lymphatic Health:</strong> Cleanses the lymphatic system and reduces lymph node swelling.</li>
                                <li><strong>Hormonal Balance:</strong> Treats hormonal imbalances, including conditions like PCOS and hypothyroidism.</li>
                                <li><strong>Skin Health:</strong> Helps treat skin conditions such as acne and eczema.</li>
                                <li><strong>Respiratory Health:</strong> Aids in relieving respiratory conditions like coughs, asthma, and bronchitis.</li>
                                <li><strong>Tumor and Cyst Reduction:</strong> Treats benign tumors, cysts, and glandular conditions.</li>
                            </ul>
                        </div>

                        {/* Section 5: Fun Fact */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor">Fun Fact</h2>
                            <p className="mt-4 text-lg">
                                The Kanchanara tree is known for its beautiful purple-pink flowers that bloom in spring. In Ayurveda, its bark is used for medicinal purposes.
                            </p>
                            <p className="mt-2 text-lg">
                                Kanchanara is commonly used with guggul in **Kanchanara Guggulu** to treat thyroid issues, cysts, and tumors.
                            </p>
                        </div>

                        {/* Section 6: 3D Model */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-customColor text-center">3D Model</h2>
                            <div className="mt-4 flex justify-center">
                                <iframe 
                                    title="Flower Bauhinia Variegata" 
                                    src="https://sketchfab.com/models/7386b08b85e14e51b93975c2722b5771/embed" 
                                    className="w-full h-96 max-w-4xl rounded-lg shadow-lg" 
                                    allow="autoplay; fullscreen; xr-spatial-tracking">
                                </iframe>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Link to="/KanchanaraQuiz">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                    Take the Kanchanara Quiz
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kanchanara;
