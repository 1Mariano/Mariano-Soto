import "./Footer.css"
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs'; 


export default function Footer() {
  return (
    <footer className="footer">
      <div className="caja-1">
        <ol className="lista-footer">
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
        </ol>
      </div>
      <div className="caja-2">
        <BsInstagram className="iconos-footer ig" />
        <BsFacebook className="iconos-footer fb" />
        <BsWhatsapp className="iconos-footer ws" />
      </div>
    </footer>
  )
}
