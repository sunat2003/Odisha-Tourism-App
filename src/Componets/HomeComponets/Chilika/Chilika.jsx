import "./Chilika.css";
import React, { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export function Chilika() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="place-section-s">
      <Navbar />
      <div className="place-hero-section-s p-chilika"></div>
      <div className="place-details-section-s">
        <h1>Chilika Tourist Destination Guide</h1>
        <div className="place-details-s">
          <h3>About Chilika</h3>
          <h4>
            Planning a Trip to Chilika? Here's our list of 16 top Tourist Places
            to visit in Chilika
          </h4>
          <p>
            Chilika Lake is the largest internal saltwater lake in Asia, it is a
            paradise on earth for bird watchers and nature lovers. The pear
            shaped lake is dotted with a few small islands and has fisheries and
            salt pans around its shore. At a distance of 44 km from Puri,
            Chilika Lake is Asia's biggest inland saltwater lagoon situated near
            Satapada in Odisha. Located at the mouth of the Daya River, Chilika
            Lake is the largest coastal lagoon in India and also the second
            largest saltwater lagoon in the world after the New Caledonian
            barrier reef in New Caledonia. The lake is studded with small
            islands including the most charming Honeymoon Island and the
            Breakfast Island. Spreads across 1,100 sq. km, the pear-shaped lake
            extends from Bhusandpur in Puri district in the North to
            Rambha-Malud in Ganjam district in the South, separated from the Bay
            of Bengal by a 60 km long narrow strip of marshy islands and sand
            flats. The lake is an ecosystem with large fishery resources. It
            sustains more than 150,000 fisher folk living in 132 villages on the
            shore and Islands. In 1981, Chilika Lake was designated the first
            Indian wetland of international importance under the Ramsar
            Convention. The lake also acts as one of the most supportive
            ecosystems in the name of Chilika Lake Sanctuary. It is the largest
            wintering ground for migratory birds on the Indian sub continent.
            Birds from the Caspian Sea, Lake Baikal, Aral Sea and other remote
            parts of Russia, Kirghiz steppes of Mongolia, Central and Southeast
            Asia, Ladakh and Himalayas come here. White bellied sea eagles,
            Graylag Geese, Purple Moorhen, Jacana, Herons and Flamingos are
            among the many species which make the lake a bird watcher's delight.
            Chilika in fact, is home to one of the world's largest breeding
            colonies of Flamingos. Being richly famous for the presence of
            aquatic wildlife, Chilika Lake sanctuary also houses Irrawaddy
            dolphins which are different from the other dolphins as their color
            and dorsal fin being less prominent. Apart from the avifaunal
            species, the region also highlights varied wild animals such as
            Blackbuck, Golden Jackals, Spotted Deer and Hyenas. Chilika Lake
            Sanctuary is favorably known for its dynamic sunrise and sunset
            views. One of the most famous tourist attractions near Chilika
            Wildlife Sanctuary is Kalijai Temple, devoted to Goddess Kalijai.
            Makar Sankranti is celebrated with great pomp and cheer at the
            temple that attracts numerous travelers & devotees. Chilika Lake is
            the most popular destination for eco-tourism in Orissa. Apart from
            having the presence of exotic wildlife in the area, the lake and its
            vicinity hold a rich floral system with abundance of aquatic as well
            as non aquatic plants. The recent environmental survey revealed the
            presence of more than 710 species of plants in and around Chilika
            Lake. Such a huge variety of Flora and Fauna including numerous rare
            and endangered species of all forms has been the main reason for
            considering Chilika Lake as Ramsar site.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
