import React, { useState, useEffect, useRef } from 'react';
import logo from './images/black2_logo.svg';
import { InView, useInView } from 'react-intersection-observer';


// TypingEffect Component
const TypingEffect = () => {
  const greetings = [
    "Welcome to AYURGARDEN – Your Virtual Herbal Heaven", // English
    "आयुर्गार्डन में आपका स्वागत है – आपका आभासी हर्बल स्वर्ग", // Hindi
    "आयुरगर्डन मं तुंहांर स्वागत छे – तुंहर आभासी हर्बल स्वर्ग", // Garhwali
    "आयुर्गार्डन मं तुंहांर स्वागत छ – तुंहर आभासी जड़ी-बूटी को स्वर्ग", // Kumaoni
    "ਆਯੁਰਗਾਰਡਨ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ – ਤੁਹਾਡਾ ਵਰਚੁਅਲ ਜੜੀ-ਬੂਟੀ ਦਾ ਸਵਰਗ" // Punjabi
];

  const [currentText, setCurrentText] = useState('');
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100); // Typing speed

  useEffect(() => {
    const handleTyping = () => {
      const fullGreeting = greetings[currentGreetingIndex]; // Current greeting based on index
      const isAtEnd = currentText === fullGreeting;
      const isAtStart = currentText === '';

      if (!isDeleting && !isAtEnd) {
        setCurrentText(fullGreeting.substring(0, currentText.length + 1));
        setSpeed(70); // Speed while typing
      } else if (isDeleting && !isAtStart) {
        setCurrentText(fullGreeting.substring(0, currentText.length - 1));
        setSpeed(40); // Speed while deleting
      }

      if (isAtEnd && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isAtStart && isDeleting) {
        setIsDeleting(false);
        setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length); // Cycle through greetings
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentGreetingIndex, speed]);

  return (
    <h1 className="text-4xl font-bold gradient-text  text-center">
      {currentText}
    </h1>
  );
};

// Main Home Component
function Home() {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  console.log(myElementIsVisible)
  const imageRef = useRef(null);
  return (
    <>
     <div className="home-page flex flex-col justify-center mt-10 items-center max-w-4/5 w-full h-screen mx-auto p-8 text-gray-800">
        {/* Typing Effect Component */}
        <div className="flex justify-center items-center w-full h-full">
          {/* Left side (text) */}
          <div className="flex-1 p-6 flex items-center justify-center">
            <TypingEffect />
          </div>

          {/* Right side (image) */}
          <div className="flex-1 flex items-center justify-center glowing">
            
            <img 
              src={logo}
              alt="Herbal Garden" 
              className="h-auto w-auto object-contain "  // Set to fixed size to prevent resizing
            />
          </div>
        </div>
       
        <p ref={myRef} className={`text-6xl leading-relaxed  texuu flex justify-center hiddd ${myElementIsVisible ? "appearFromBottom2":'' }`}><strong>Our Goals</strong></p>

    </div>
    </>
  );
}

export default Home;
