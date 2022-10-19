import Hero from './Sections/Hero'
import Stats from "./Components/Stats";

import './App.css'
import Profile from './Sections/Profile';
import About from './Sections/About';
import Ways from './Components/Ways';
import LastSection from './Sections/LastSection';

function App() {
 

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Stats />      
      <Profile />
      <About />
      <Ways />
      <LastSection />
    </div>
  )
}

export default App
