import puri from '../../../Assets/puri.png';
import pdp from '../../../Assets/pdp.jpg';
import bbsr from '../../../Assets/bbsr.jpg';
import cilika from '../../../Assets/cilika.jpg';
import konark from '../../../Assets/konark.jpg';
import cuttack from '../../../Assets/cuttack.png';
import "./MejorTouristPlace.css";
import { Link } from 'react-router-dom';
var place=[
    {
        id:1,
        name:"Puri",
        image:puri,
        description:"Puri is famous for the world famous Shri Jagannath Temple & Longest Golden Beach. It is one of the Dhamas (Holiest of the holy place) out of four Dhamas i.e. Puri, Dwarika, Badrinath & Rameswar, in India. "
    },
    {
        id:2,
        name:"Bhubaneswer",
        image:bbsr,
        description:"Bhubaneswar is the capital city of the Odisha. It is the largest city of the state, and has become the center of economic and religious importance in the region. Bhubaneswar is called the Temple city of India."
    },
    {
        id:3,
        name:"Paradeep",
        image:pdp,
        description:"Paradeep is famous for its green forest, blue waters and pebbles and beach rocks. Travellers who want to soothe their soul can spend the time frolicking in the lovely indigo water."
    },
    {
        id:4,
        name:"Cilika",
        image:cilika,
        description:"Located south of the mouth of the Mahanadi River in unspoiled Orissa, this lake was once a bay of the ocean until it was silted up by monsoon tides. It is separated from the Bay of Bengal by a narrow spit."
    },
    {
        id:5,
        name:"Konark",
        image:konark,
        description:"In the silence of the night DHARMABRATA decided to sacrifice his life by jumping into the Chandrabhaga river from the top of the temple and save the 1200 WORKERS from getting beheaded."
    },
    {
        id:6,
        name:"Cuttack",
        image:cuttack,
        description:"Cuttack is also known as the Millennium City as well as the Silver City due to its history of 1000 years and famous silver filigree works. It is also considered as the judicial capital of Odisha as the Odisha High Court is located here."
    },
]
export function MejorTouristPlace() {
  return (
    <section className="mejor-place-se">
      <h1>Major Touriest Destinations in Odisha</h1>
      <div className="place-details">
        {
           place.map(data=>
            <div key={data.id} className="details-box">
                <img src={data.image} alt="loading" />
               <div className="data-details">
               <h3>{data.name}</h3>
               <p>{data.description}</p>
               <button className="place-btn"><Link className="d-link" to={"/"+data.name} >learn More</Link></button>
               </div>
            </div>
           ) 
        }
      </div>
    </section>
  );
}
