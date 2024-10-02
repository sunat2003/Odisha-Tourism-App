import React, { useEffect } from "react";
import "./BBSR.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
export function BBSR() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="place-section-s">
      <Navbar />
      <div className="place-hero-section-s p-bbsr"></div>
      <div className="place-details-section-s">
        <h1>Bhubaneswar Tourist Destination Guide</h1>
        <div className="place-details-s">
          <h3>About Bhubaneswar</h3>
          <h4>
            Planning a Trip to Puri? Here's our list of 16 top Tourist Places to
            visit in BBSR
          </h4>
          <p>
            Bhubanswar emerged with century old name as Temple city is the
            capital city of Indian state Odisha. Currently the city has
            flourished with a new name and that is Smart City of Odisha. It is
            also named as Ekamra Kshetra due to its religious establishments.
            The Temple city got its name due to hub of 7000 temples once upon a
            time. The state capital of Odisha is a sprawling metropolis that
            very ably preserves the balance between upholding olden values and
            cultural heritage on one hand and being able to conform to changing
            modern times on the other. Literally the city's name is based on the
            Lord Shiva, who is also named as Tribhubaneswara, “Lord of the three
            worlds”. On the year 1948 the foundation of the modern Bhubaneswar
            city was laid. The city is designed by famous German architect Mr.
            Otto Konigsberger. As a smart city, Bhubaneswar is providing all
            modern facilities for your tour. It is the hub of Night Bars, Pops,
            Disco, Luxury Hotels, Rocking Music and many more that will satisfy
            you needs. Bhubaneswar being the center for religious tourism has a
            number of majestic temples built centuries ago which have still
            retained their original over all these years.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
