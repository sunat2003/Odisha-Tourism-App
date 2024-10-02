import "./Konark.css";
import React, { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export function Konark() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="place-section-s">
      <Navbar />
      <div className="place-hero-section-s p-konark"></div>
      <div className="place-details-section-s">
        <h1>Konark Tourist Destination Guide</h1>
        <div className="place-details-s">
          <h3>About Konark</h3>
          <h4>
            Planning a Trip to Konark? Here's our list of 16 top Tourist Places
            to visit in Konark
          </h4>
          <p>
            Konark is a town situated in the Puri district in the state of
            Odisha, India. It is the site of the 7th century Sun Temple, also
            known as the Black Pagoda, built in black granite during the reign
            of Narasimhadeva-I. The temple is a world heritage site. Konark is
            also home to an annual dance festival called Konark Dance Festival,
            devoted to classical Indian dance forms. Every year Konark Festival
            and International Sand Art Festival at Chandrabhaga beach of Konark
            have been organizing to attract world over artisans and tourists. A
            UNESCO World Heritage Site, Konark Sun temple is a striking model of
            ancient Kalinga artistry and fluidity of ideas. Dedicated to the Sun
            god, Surya, the first rays of the sun fall on the entrance of the
            temple. Much of the temple has fallen into rack and ruin but what
            remains still holds enough charm to captivate. An interpretation of
            a greater imagination, it has seen empires rise and fall, identities
            washed away, yet appealing to our sensorium even today. Konark Sun
            Temple is situated in the northeastern corner of Puri and is
            dedicated to Sun God. Konark is also known as “Arka kshetra”. There
            are three images of the Sun God at three different sides of the
            temple, positioned in the proper direction to catch the rays of the
            sun in the morning, noon and evening. Believed to have been built in
            the 13th century CE the temple was built by the King Narasimhadeva-I
            hailing from the Eastern Ganga dynasty between 1238-1250 CE. The
            temple was called Black Pagoda attributing to its dark facade by the
            Europeans who used it for navigation for their ships. It is said
            that the temple could draw ships to the shore due to its magnetic
            powers
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
