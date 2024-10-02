import "./Paradeep.css";
import React, { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export function Paradeep() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="place-section-s">
      <Navbar />
      <div className="place-hero-section-s p-pdp"></div>
      <div className="place-details-section-s">
        <h1>Paradeep Tourist Destination Guide</h1>
        <div className="place-details-s">
          <h3>About Paradeep</h3>
          <h4>
            Planning a Trip to Paradeep? Here's our list of 16 top Tourist
            Places to visit in Paradeep
          </h4>
          <p>
            A major port of Odisha , Paradeep is a major seaport town and a
            designated municipality area in Jagatsinghpur district of Odisha,
            India. On the confluence of the river Mahanadi and the Bay of
            Bengal, Paradeep is a beautiful beach. The beach is famous for its
            clear Blue Water, Green Forest, Stones along side the Beach, a good
            Marine Drive and the biggest Port. Paradeep is one of the most
            serene and tranquil beaches of Odisha. Boasting of golden shimmering
            sands, indigo blue waters and lined with huge rock boulders, the
            beach is not a prominent tourist spot but also a major sea port of
            the country. Paradeep Port is a major seaport in Odisha, which is
            considered to be one of the largest ports on the eastern coast of
            India. During 2009 - 2010, this port recorded the handling of over
            57 million tonnes of cargo, including Thermal Coal and Iron Ore. It
            is also the chief sea-borne trade center in the Bay of Bengal, whose
            foundation stone was laid in 1962 by the then Prime Minister of
            India, Pandit Jawaharlal Nehru. Paradeep Port has also been
            specially mechanised with iron ore berths, cargo berths, container
            handling facilities and coal handling plants. Close to the port lies
            the Paradeep Beach at the convergence of the Mahanadi River and the
            Bay of Bengal.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
