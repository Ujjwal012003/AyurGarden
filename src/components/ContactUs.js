import React, { useEffect, useState } from 'react'
import Navbar from './Navbar2'
import SpinLoader from './SpinLoader';

function ContactUs() {

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
   <div className='flex justify-center min-h-full min-w-full mt-20'>

  
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd7NOM4Rc9W5nFXy3sVDYEuh1huUvE7JRy9MCWdcpAMZ_GOOw/viewform?embedded=true"  className='flex justify-center h-screen w-1/2'>Loading…</iframe>
   </div>
   
  )}
  </>
);
}

export default ContactUs
