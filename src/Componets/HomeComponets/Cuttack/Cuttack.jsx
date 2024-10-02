import "./Cuttack.css";
import React, { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export function Cuttack() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="place-section-s">
      <Navbar />
      <div className="place-hero-section-s p-ctc"></div>
      <div className="place-details-section-s">
        <h1>Cuttack Tourist Destination Guide</h1>
        <div className="place-details-s">
          <h3>About Cuttack</h3>
          <h4>
            Planning a Trip to Cuttack? Here's our list of 16 top Tourist Places
            to visit in Cuttack
          </h4>
          <p>
            Once known as the former capital city of Odisha, Cuttack is
            currently renowned as the commercial city and cultural capital of
            Odisha. This second-largest city of the Indian state Odisha is
            always buzzing with cultural activities and plays host to a variety
            of festivals like the Baliyatra, which commemorates the ancient
            trade links the countries like Java, Bali and Sumatra, Durga Puja
            and the Kite Festival which is held in the month of January. The
            city said to be the commercial capital due to most of the small and
            large business houses of Odisha belong to Cuttack only. The city is
            also known as the millennium and sliver city of India as well. Due
            to the world famous filigree work is done on the silver Ornaments
            and Jewelry. The ivory and the brass work being done along with the
            textile industry of the state have brought it into the limelight.
            Cuttack is the most chosen place for affordable shopping all over
            the state. The city is also known for the best variety of evening
            tiffin and snacks item.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
