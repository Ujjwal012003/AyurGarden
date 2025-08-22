import * as React from 'react'; 
import * as ReactDOM from "react-dom/client";
import Home from './components/Home';
import Footer from './components/Footer';
import Goal from './components/Goal';
import Garden from './components/Garden';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Amla from './components/herbcards/Amla';
import Ashwagandha from './components/herbcards/Ashwagandha';
import Kanchanara from './components/herbcards/Kanchanara';
import Ginger from './components/herbcards/Ginger';
import Moringa from './components/herbcards/Moringa';
import Neem from './components/herbcards/Neem';
import Tulsi from './components/herbcards/Tulsi';
import Turmeric from './components/herbcards/Turmeric';
import Team from './components/team/team';
import AmlaQuiz from './components/herbcards/Quiz/Amla_quiz';
import KanchanaraQuiz from './components/herbcards/Quiz/KanchanaraQuiz';
import TulsiQuiz from './components/herbcards/Quiz/TulsiQuiz';
import TurmericQuiz from './components/herbcards/Quiz/TurmericQuiz';
import GingerQuiz from './components/herbcards/Quiz/GingerQuiz';
import MoringaQuiz from './components/herbcards/Quiz/MoringaQuiz';
import NeemQuiz from './components/herbcards/Quiz/NeemQuiz';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
    {location.pathname === '/' && <Navbar />}

      
      {location.pathname === '/' && (
        <>
          <div id="home">
            <Home />
          </div>
          <div id="goal">
            <Goal  />
          </div>
        </>
      )}

      {/* Routes for Garden and Contact Us */}
      <Routes>
        <Route path="/Garden" element={<Garden  />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Amla" element={<Amla />} />
        <Route path="/Ashwagandha" element={<Ashwagandha />} />
        <Route path="/Kanchanara" element={<Kanchanara />} />
        <Route path="/Ginger" element={<Ginger />} />
        <Route path="/Moringa" element={<Moringa />} />
        <Route path="/Neem" element={<Neem />} />
        <Route path="/Tulsi" element={<Tulsi />} />
        <Route path="/Turmeric" element={<Turmeric />} />
        <Route path="/Team" element={<Team />} />     
        <Route path="/AmlaQuiz" element={<AmlaQuiz />} />  
        <Route path="/KanchanaraQuiz" element={<KanchanaraQuiz />} />  
        <Route path="/TulsiQuiz" element={<TulsiQuiz />} />  
        <Route path="/TurmericQuiz" element={<TurmericQuiz />} />  
        <Route path="/GingerQuiz" element={<GingerQuiz />} />  
        <Route path="/MoringaQuiz" element={<MoringaQuiz />} />  
        <Route path="/NeemQuiz" element={<NeemQuiz />} />  

      </Routes>

      <Footer />
    </div>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
