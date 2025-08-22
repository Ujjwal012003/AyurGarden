import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
function Goal() {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true, // Animation will trigger once when the element comes into view
    threshold: 0.2,    // Adjust this value to trigger when 20% of the element is in view
  });

  return (
    <div ref={myRef} className='max-w-7xl mx-auto p-8'> {/* Attach the ref here to detect visibility */}
    <p ref={myRef} className={`text-xl leading-relaxed mt-16 texuu  hidd ${myElementIsVisible ? "blockyy":'' }`} >

At <strong>AYURGARDEN</strong>, we believe that nature has always held the key to wellness, balance, and healing. 
Our goal is to bring you closer to the wisdom of traditional medicinal plants used in 
<strong> AYUSH</strong> (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy), all native to the lush 
landscapes of Uttarakhand. This isn't just a website—it's a gateway to a rich, immersive experience where you can 
explore the healing power of nature, one plant at a time.
</p>
      <p className={`text-xl leading-relaxed mb-6 texuu  hidd ${myElementIsVisible ? "blockyy" : ''}`}>
        Imagine strolling through a serene, virtual herbal garden from the comfort of your home. As you move through our 
        interactive space, you'll discover medicinal plants, each with its own story to tell. Whether it's the soothing 
        <strong> Tulsi </strong>, the rejuvenating <strong> Ashwagandha </strong>, or the cooling <strong> Aloe Vera </strong>, 
        every plant in our garden is carefully selected to showcase its unique place in traditional healing.
      </p>

      <div className="grid grid-cols-2 gap-8 texuu">
        <div className={`border mt-4 p-6 rounded-lg flex items-center justify-center h-64 w-full shadow-lg texuu blueShadow hidd ${myElementIsVisible ? "blockyy" : ''}`}>
          <h2 className="text-3xl font-semibold text-green-600">Why AYURGARDEN?</h2>
        </div>

        <div className={`border mt-4 p-6 rounded-lg h-64 w-full shadow-lg overflow-hidden flex items-center justify-center texuu blueShadow ${myElementIsVisible ? "blockyyy" : ''}`}>
          <p className="text-lg leading-relaxed break-words texuu">
            We created AYURGARDEN with a simple idea: to make the ancient knowledge of healing plants more accessible to everyone. 
            Our mission is to foster a deeper connection between people and the natural world, while also promoting the sustainable 
            use of medicinal herbs that have been used for generations.
          </p>
        </div>

        <div className={`border mt-4 blueShadow p-6 rounded-lg h-64 w-full shadow-lg overflow-hidden flex items-start ${myElementIsVisible ? "blockyy" : ''}`}>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-tight overflow-y-auto">
            <li><strong>Explore Medicinal Plants:</strong> Discover plants used in AYUSH systems, with detailed information.</li>
            <li><strong>Learn at Your Own Pace:</strong> Educational resources for traditional medicine and herbs.</li>
            <li><strong>Get Immersed in Nature:</strong> Experience a peaceful, digital stroll through our vibrant garden.</li>
            <li><strong>Join a Community:</strong> Connect with others who share your passion for holistic wellness and nature.</li>
          </ul>
        </div>

        <div className={`border mt-4 blueShadow p-6 rounded-lg flex items-center justify-center h-64 w-full shadow-lg ${myElementIsVisible ? "blockyyy" : ''}`}>
          <h2 className="text-3xl font-semibold text-green-600">Things You Can Do in AYURGARDEN</h2>
        </div>
      </div>

      <div className={`text-3xl flex justify-center font-semibold text-green-600 mt-8 mb-4 ${myElementIsVisible ? 'appearFromBottom' : ''}`}>
        <h2>Step into the Future of Herbal Wellness</h2>
      </div>

      <div className={`text-xl font-bold text-white text-center mb-8 ${myElementIsVisible ? 'appearFromBottom' : ''}`}>
        <p>
          We invite you to explore AYURGARDEN, where modern technology meets ancient wisdom. Let us guide you through the 
          age-old traditions of herbal medicine, giving you the tools to harness the power of nature for a healthier, more balanced life.
        </p>
      </div>

      <p className={`text-xl font-bold text-green-600 text-center mb-8 hidd ${myElementIsVisible ? 'appearFromBottom' : ''}`}>
        Welcome to AYURGARDEN—where wellness grows.
      </p>
      <p className='flex justify-center text-customColor text-xl mt-16'> <Link to="/Garden" >
      Visit The Virtual Garden Now
          </Link>  </p>
    </div>
  );
}

export default Goal;
