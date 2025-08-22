import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar2';
import SpinLoader from './SpinLoader';
import Vid from './Video';
import amla from './herbcards/images/amla.png';
import bauhinia from './herbcards/images/bauhinia.png';
import tulsi from './herbcards/images/tulsi.png';
import turmeric from './herbcards/images/turmeric.png';
import ginger from './herbcards/images/ginger.png';
import ashwagandha from './herbcards/images/ashwagandha.png'; 
import moringa from './herbcards/images/moringa.png'
import neem from './herbcards/images/neem.png'

function Garden() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const [NotShowing, setNotShowing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNotShowing(false);
    }, 2100);
  }, []);

  return (
    <>
      <SpinLoader />
      <Navbar />
      {NotShowing ? (
        <h1></h1>
      ) : (
        <div>
          <Vid />
          <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white">
            
            <div className="max-w-4xl w-full mt-10 space-y-4">
              {/* Garden Cards */}
              <div className="flex w-full">
                <Link 
                  to="/Amla" 
                  className="w-1/2 p-4 border border-green-500 blockyy group relative hover:bg-gray-800 transition duration-300 transform group-hover:-translate-y-2 overflow-hidden greenShadow"
                >
                  <img 
                    src={amla} 
                    alt="" 
                    className='mx-auto w-72 h-72 transition duration-300 group-hover:blur' 
                  />
                  <p className='flex justify-center text-customColor text-lg transition duration-300 group-hover:blur'>AMLA (आमलकी)</p>
                  <span className="absolute inset-0 flex flex-col items-center justify-center text-customColor text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
                      Amla, also known as the Indian gooseberry, holds a special place in Ayurveda for its wide-ranging health benefits.<br />
                      <strong>Sanskrit Name:</strong> Amla is known as Amalaki (आमलकी) in Sanskrit.<br />
                      <strong>Medicinal Name:</strong> The scientific name of Amla is Phyllanthus emblica or Emblica officinalis.
                    </span>
                  </span>
                </Link>
                <div className="w-1/2 p-4"></div>
              </div>

              <div className="flex w-full">
                <div className="w-1/2 p-4"></div>
                <Link 
  to="/Kanchanara" 
  className="w-1/2 p-4 border border-blue-500 block group relative hover:bg-gray-800 transition duration-300 transform group-hover:-translate-y-2 overflow-hidden blueShadow"
>
  <img 
    src={bauhinia} 
    alt="Kanchanara" 
    className='mx-auto w-72 h-72 transition duration-300 group-hover:blur' 
  />
  <p className='flex justify-center text-customColor text-lg transition duration-300 group-hover:blur'>Kanchanara (कांचनार)</p>
  <span className="absolute inset-0 flex flex-col items-center justify-center text-customColor text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <span className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
      Kanchanara is an important herb in Ayurveda, known for supporting healthy lymphatic and glandular systems. It is commonly used in treatments for hormonal balance and detoxification.<br />
      <strong>Sanskrit Name:</strong> Kanchanara (कांचनार)<br />
      <strong>Medicinal Name:</strong> Bauhinia variegata
    </span>
  </span>
</Link>
              </div>

              <div className="flex w-full">
                <Link 
                  to="/Tulsi" 
                  className="w-1/2 p-4 border border-green-500 blockyy group relative hover:bg-gray-800 transition duration-300 transform group-hover:-translate-y-2 overflow-hidden greenShadow"
                >
                  <img 
                    src={tulsi} 
                    alt="" 
                    className='mx-auto w-72 h-72 transition duration-300 group-hover:blur' 
                  />
                  <p className='flex justify-center text-customColor text-lg transition duration-300 group-hover:blur'>TULSI (तुलसी)</p>
                  <span className="absolute inset-0 flex flex-col items-center justify-center text-customColor text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
                      Tulsi, also known as the "Holy Basil," is considered one of the most sacred and powerful herbs in Ayurveda. Revered as "The Queen of Herbs," it has a long history of use for promoting health and spiritual well-being.<br />
                      <strong>Sanskrit Name:</strong> Tulsi (तुलसी)<br />
                      <strong>Medicinal Name:</strong> Ocimum sanctum or Ocimum tenuiflorum.
                    </span>
                  </span>
                </Link>
                <div className="w-1/2 p-4"></div>
              </div>

              <div className="flex w-full">
                <div className="w-1/2 p-4"></div>
                <Link 
                  to="/Ashwagandha" 
                  className="w-1/2 p-4 border border-blue-500 blockyyy group relative hover:bg-gray-800 transition duration-300 transform group-hover:-translate-y-2 overflow-hidden blueShadow"
                >
                  <img 
                    src={ashwagandha} 
                    alt="" 
                    className='mx-auto w-72 h-72 transition duration-300 group-hover:blur' 
                  />
                  <p className='flex justify-center text-customColor text-lg transition duration-300 group-hover:blur'>ASHWAGANDHA (अश्वगंधा)</p>
                  <span className="absolute inset-0 flex flex-col items-center justify-center text-customColor text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
                      Ashwagandha is one of the most revered and powerful herbs in Ayurveda, often referred to as the "King of Ayurvedic Herbs." It is particularly valued for its adaptogenic properties, helping the body manage stress and improve overall vitality.<br />
                      <strong>Sanskrit Name:</strong> Ashwagandha (अश्वगंधा)<br />
                      <strong>Medicinal Name:</strong> Withania somnifera.
                    </span>
                  </span>
                </Link>
              </div>

              <div className="flex w-full">
  <Link 
    to="/Turmeric" 
    className="w-1/2 p-4 border border-green-500 blockyy group relative hover:bg-gray-800 transition duration-300 transform group-hover:-translate-y-2 overflow-hidden greenShadow"
  >
    <img 
      src={turmeric} // Placeholder for Turmeric image
      alt="" 
      className='mx-auto w-72 h-72 transition duration-300 group-hover:blur' 
    />
    <p className='flex justify-center text-customColor text-lg transition duration-300 group-hover:blur'>TURMERIC (हरिद्र)</p>
    <span className="absolute inset-0 flex flex-col items-center justify-center text-customColor text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
        Turmeric is one of the most revered herbs in Ayurveda, known for its numerous health benefits and its vibrant yellow color. It is widely used as a spice and a medicinal herb.<br />
        <strong>Sanskrit Name:</strong> Haridra (हरिद्र)<br />
        <strong>Medicinal Name:</strong> Curcuma longa
      </span>
    </span>
  </Link>
  <div className="w-1/2 p-4"></div>
</div>

<div className="flex w-full">
  <div className="w-1/2 p-4"></div>
  <Link 
    to="/Ginger" 
    className="w-1/2 p-4 border border-blue-500 blockyyy group relative hover:bg-gray-800 transition duration-300 transform group-hover:-translate-y-2 overflow-hidden blueShadow"
  >
    <img 
      src={ginger} // Placeholder for Ginger image
      alt="" 
      className='mx-auto w-72 h-72 transition duration-300 group-hover:blur' 
    />
    <p className='flex justify-center text-customColor text-lg transition duration-300 group-hover:blur'>GINGER (विश्वभेषज)</p>
    <span className="absolute inset-0 flex flex-col items-center justify-center text-customColor text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
        Ginger is a fundamental herb in Ayurveda, widely known for its numerous health benefits and culinary uses. It is often referred to as a warming spice with significant medicinal properties.<br />
        <strong>Sanskrit Name:</strong> Vishwabhesaj (विश्वभेषज) or Shunti (शुंठि)<br />
        <strong>Medicinal Name:</strong> Zingiber officinale
      </span>
    </span>
  </Link>
</div>
<div className="flex w-full">
  <Link 
    to="/Moringa" 
    className="w-1/2 p-4 border border-green-500 blockyy group relative hover:bg-gray-800 transition duration-300 transform group-hover:-translate-y-2 overflow-hidden greenShadow"
  >
    <img 
      src={moringa} // Placeholder for Moringa image
      alt="" 
      className='mx-auto w-72 h-72 transition duration-300 group-hover:blur' 
    />
    <p className='flex justify-center text-customColor text-lg transition duration-300 group-hover:blur'>MORINGA (सहजन)</p>
    <span className="absolute inset-0 flex flex-col items-center justify-center text-customColor text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
        Moringa is a highly regarded herb in Ayurveda, known for its extensive nutritional profile and numerous health benefits. Often referred to as a "superfood," it is valued for its ability to support overall health and wellness.<br />
        <strong>Sanskrit Name:</strong> Drumstick Tree (Sahajan) (सहजन)<br />
        <strong>Medicinal Name:</strong> Moringa oleifera
      </span>
    </span>
  </Link>
  <div className="w-1/2 p-4"></div>
</div>

<div className="flex w-full">
  <div className="w-1/2 p-4"></div>
  <Link 
    to="/Neem" 
    className="w-1/2 p-4 border border-blue-500 blockyyy group relative hover:bg-gray-800 transition duration-300 transform group-hover:-translate-y-2 overflow-hidden blueShadow"
  >
    <img 
      src={neem} // Placeholder for Neem image
      alt="" 
      className='mx-auto w-72 h-72 transition duration-300 group-hover:blur' 
    />
    <p className='flex justify-center text-customColor text-lg transition duration-300 group-hover:blur'>NEEM (निम्ब)</p>
    <span className="absolute inset-0 flex flex-col items-center justify-center text-customColor text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
        Neem is a highly esteemed herb in Ayurveda, recognized for its remarkable medicinal properties and extensive use in traditional healing practices. Often called a "wonder tree," Neem is valued for its effectiveness in promoting health and wellness.<br />
        <strong>Sanskrit Name:</strong> Nimba (निम्ब)<br />
        <strong>Medicinal Name:</strong> Azadirachta indica
      </span>
    </span>
  </Link>
</div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Garden;
