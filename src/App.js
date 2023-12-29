
import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/portfolio';


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Services></Services>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
