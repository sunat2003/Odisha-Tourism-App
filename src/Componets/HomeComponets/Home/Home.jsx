import React from 'react-dom';
import './Home.css';
import { Navbar } from '../Navbar/Navbar';
import { Hero } from '../Hero/Hero';
import { MejorTouristPlace } from '../MejorTouristPlace/MejorTouristPlace';
import { FAQ } from '../FAQ/FAQ.jsx';
import { Footer } from '../Footer/Footer.jsx';


export function Home(){
    return(
        <div className="home-section">
           <Navbar/>
           <Hero />
           <MejorTouristPlace/>
           <FAQ/>
           <Footer/>
        </div>
    )
}
