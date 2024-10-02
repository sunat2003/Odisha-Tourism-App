import React, { useEffect } from "react";
import "./Puri.css";
import { Navbar } from "../Navbar/Navbar";
import {Footer} from '../Footer/Footer';


export function Puri() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="place-section-s">
      <Navbar />
      <div className="place-hero-section-s p-puri"></div>
      <div className="place-details-section-s">
        <h1>Puri Tourist Destination Guide</h1>
        <div className="place-details-s">
          <h3>About Puri</h3>
          <h4>
            Planning a Trip to Puri? Here's our list of 16 top Tourist Places to
            visit in Puri
          </h4>
          <p>
            One of the four Dhams of Hinduism, Puri is the ancient city that
            brins with the magic of tourist places that can win hearts in a
            blink. It's only when one walks along with the many pilgrimages in
            Puri, chanting the name of Lord Jagannath, that he feels the outpour
            of peace in his soul. The District of Puri has been named after its
            headquarters, Puri. According to Cunningham, the ancient name of
            this town was Charitra, mentioned by the Chinese pilgrim Hiuen Tsang
            as Che-li-ta-lo. But the restoration of the word Che-li-ta-lo as
            Charitra and its identification with the town of Puri are open to
            doubt. The importance of the town as a seat of Vaisnavism increased
            when Chodaganga Deva constructed the temple of Purusottama Jagannath
            and installed the images of the deities. Thereafter, it became
            famous as the abode of Purusottama and was popularly called
            Purusottama Kshetra. In 1912, the new province of Bihar and Odisha
            was formed and subsequently, Odisha became a separate province in
            1936. After integration with Odisha on 1st January 1948, of the
            feudatory states of Nayagarh, Daspalla, Khandapara and Ranapur with
            a total area of 3941 sq. km., a separate sub-division comprising
            these ex-states was added to Puri District with its headquarters at
            Nayagarh. The fourth sub-division of Bhubaneswar was established on
            26th January 1959. The old Puri District consisted of four
            sub-divisions i.e. Puri Sadar, Khordha, Bhubaneswar and Nayagarh.
            Puri Sadar sub-division consisted of four Tahasils i.e. 1 Krushna
            Prasad 2. Sadar 3. Pipili and 4. Nimapara. Again by the year 1995,
            Puri District was divided into 3 Districts i.e.1. Nayagarh District
            comprising of Nayagarh sub-division. 2. Khurda District comprising
            of Khordha and Bhubaneswar sub-divisions. 3. Puri District
            comprising of Puri Sadar sub-division only.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
