import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
export function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-section-shade">
        <div className="footer-div">
          <div className="footer-box">
            <h2 className="logo">
              Odisha <span>Tourism</span>
            </h2>
            <p>
              <FaPhone /> Ph. No.- +91 6370822753
            </p>
            <p>
              <MdEmail /> sunatkumar516@gmail.com
            </p>
          </div>
          <div className="footer-box">
            <h3>Famous Place</h3>
            <p>Puri</p>
            <p>Cuttack</p>
            <p>Konark</p>
            <p>Paradip</p>
            <p>Bhubaneswer</p>
          </div>
          <div className="footer-box">
            <h3>Other Places</h3>
            <p>Cilika</p>
            <p>Bhitara Kanika</p>
            <p>Similipala</p>
            <p>Nandankanan</p>
          </div>
        </div>
        <p className="copy-right">&copy;copyright 2024,Sunat Kumar Das</p>
      </div>
    </section>
  );
}
