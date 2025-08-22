import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar2'
import SpinLoader from '../SpinLoader';
import Vansh from './Team_images/Vansh.jpg'
import Gautam from './Team_images/Gautam.jpg'
import Ujjwal from './Team_images/Ujjwal.jpg'
function Team() {

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
   <SpinLoader time='2100'/>
   <Navbar />
   {NotShowing ? (
     <h1></h1>
   ) : (
    < >
    <div className='ml-10 min-h-screen min-w-full  mt-10'>
    <div className=' '>
    <div className='flex justify-center'><h1 className='text-3xl'>
        TEAM Hackverse | <strong> I.K.Gujral Punjab Technical University Jalandhar </strong>
    </h1> </div>
    </div>
    <div className=' w-1/2 mt-5 mb-5 mx-auto Tphotos hover:w-12/20'>
    <img className='rounded-full ml-48 flex justify-center w-64 h-64 hovo' src={Ujjwal} alt='Ujjwal' ></img>
    <h2 className='w-1/2 mt-5 mb-5 mx-auto '>Ujjwal Bhardwaj | Developer |   </h2>
    </div>
    <div className='w-1/2 mt-5 mb-5 mx-auto Tphotos'>
    <img className='rounded-full ml-48 flex justify-center w-64 h-64 hovo' src={Vansh} alt='Vansh' ></img>
    <p className='w-1/2 mt-5 mb-5 mx-auto ' >Vansh Sharma | Developer and Testing</p>
    </div>
    <div className='w-1/2 mt-5 mb-5 mx-auto Tphotos'>
    <img className='rounded-full ml-48 flex justify-center w-64 h-64 hovo' src={Gautam} alt='Gautam' ></img>
    <p className='w-1/2 mt-5 mb-5 mx-auto '>Gautam Sharma | Designer | Content Creator</p>
    </div>
    </div>
    </>
    
  )}
  </>
);
}

export default Team
