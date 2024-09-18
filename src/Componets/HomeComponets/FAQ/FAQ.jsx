import { FaPlus } from "react-icons/fa6";
import './FAQ.css';
import { useRef, useState } from "react";
var faq=[
    {
        id:1,
        heading:"Where Exactly Odiha Located",
        description:"Odisha is located in the eastern part of the country, it is bounded by the states of Jharkhand and West Bengal to the north and northeast, by the Bay of Bengal to the east, and by the states of Andhra Pradesh and Telangana to the south and Chhattisgarh to the west."
    },
    {
        id:2,
        heading:"What is the best time to visit Odisha",
        description:"Odisha is one of the most beautiful places to visit at any time of the year.."
    },
    {
        id:3,
        heading:"What Can be Expected to  a Odish Trip",
        description:"Odisha is an amalgamation of everything! Whether you are looking for Honeymoon, Adventure, Leisure, Beach, Hill Stations, Wild Parks or Water Destinations, you will find all your answers in Odisha."
    },
    {
        id:4,
        heading:"Dose Odisha have international Airport?",
        description:"Odisha has many Airports but among all Biju Pattnaik International Airport in Bhubaneswar is the most active one."
    },
    {
        id:5,
        heading:"Is Visa required to visit Odisha",
        description:"Indians certainly don't require any Visa or Passport to visit Odisha. However, both are mandatory for International tourists."
    },
    {
        id:6,
        heading:"What is the currency Exchange rate of Odisha",
        description:"Odisha is one of the most important parts of India. It follows the FOREX rate as decided by the Government of India."
    },
]
export function FAQ(){
   const [faqdata,setDataFaq]=useState({display:"none"})
   var flag=useRef(false);
   const [ide,setIde]=useState(0);

    function handleFAQClick(id){
            if(flag.current==false){
                setDataFaq(
                    {display:"block"}
                )
                flag.current=true;
                setIde(id);
            }
            else{
                setDataFaq(
                    {display:"none"}
                )
                flag.current=false;
            }

    }
    return(
        <section className="faq-section">
            <h1>FAQs - Frequently Asked Questions</h1>
            {
               faq.map(data=>
                <div className='faq-datils-box' key={data.id}>
                     
                     <div className="faq-des" onClick={()=>{handleFAQClick(data.id)}}>
                        <FaPlus></FaPlus>
                        <h3>{data.heading}</h3>
                     </div>
                     {
                        (data.id==ide)?<p style={faqdata}>{data.description}</p>:<p></p>
                     }
                </div>
               ) 
            }
        </section>
    )
}