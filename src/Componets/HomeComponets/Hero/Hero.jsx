import "./Hero.css";
import bannerVideo from "../../../Assets/hero-banner.mp4";
var details = [
  {
    id:1,
    heading: "Odisha Tourism",
    description:
      "Odisha the cultural state of India is the land of Paddy Fields,highest Tribal communities, golden Beaches, century old Temples, wildParks along with many more attractions. Odisha, the state with aglorious history, is filled with nature and adventure. Inhabited bytribal people, the not-so-developed state of Odisha must be visited tohave the experience of the myriad wonders it has in store foreverybody. Also known as the soul of India, Odisha is a place whereyou can relax on the beaches, visit the famous temples and explore thebeauty and bounty of nature and wildlife. You can also find various monuments which gloriously stand to remind you of the history of the land ",
  },
  {
    id:2,
    heading:"Why book Odisha tour package with us?",
    description:"Odisha is an amazing holiday destination, owing to the diverse experiences it offers. Go on Odisha tours with Odisha Tourism for a hassle-free visit to different destination to explore new things every time. With Odisha tourism you will find different charm and detail history of every places. The best thing with us for you is the customize holiday packages those you will love to adopt. Visit only those places, which you have selected from the list with your preferred services.Local and travel experts would agree that the best time to book a holiday package for Odisha is from October to March i.e. during the winter season. The summers in Odisha are very uncomfortable with scorching heat and frequent rain showers during the monsoon from July to September become a hindrance in visiting the various Odisha points of interests. Hence, the winters serve as the best time to visit the tourist destination in Odisha with temperatures between 13°C to 27°C. Another advantage in winters is that it is the time for migratory birds here which can be observed at Chilka lake and other national parks."
  }
];
export function Hero() {
  return (
    <section className="hero-section">
      <video src={bannerVideo} autoPlay muted loop className="hero-v"></video>
      <h1 className="video-header">Welcome To Odisha Tourism</h1>
      <div className="main-details">
      {
        details.map(data=>
          <div className="details" key={data.id}>
              <h1>{data.heading}</h1>
              <p>{data.description}</p>
          </div>
        )
      }
      </div>
    </section>
  );
}
