import { NavBar } from "../NavBar/NavBar";
import { Carrousel } from "../Carrousel/Carrousel";
import { AiOutlineUser, AiFillFileText, AiOutlinePlus } from "react-icons/ai";
import { Chat } from "../Chat/Chat";
import { HeroContent } from "../HeroContent/HeroContent";
import { Services } from "../Services/Services";
import "./home.css";

export const Home = () => {
  return (
    <>
      <NavBar />
      {/* <Carrousel /> */}
      <HeroContent />
      <div className="home-blue-line">
        <div className="home_content_numbers">
          <p className="home-number">+ 800K</p>
          <p className="home_subNumber">Usuarios</p>
        </div>
        <div className="home_content_numbers">
          <p className="home-number">+ 1.5M</p>
          <p className="home_subNumber">Atenciones</p>
        </div>
        <div className="home_content_numbers">
          <p className="home-number">+ 1500</p>
          <p className="home_subNumber">Profesionales</p>
        </div>
      </div>
      <p className="home-ofrecemos">¿Qué te ofrecemos?</p>
      <div className="home_card_container">
        <div className="home_content_card">
          <p>
            <AiOutlineUser
              style={{ color: "rgb(163, 163, 253,.5)", fontSize: "50px" }}
            />
          </p>
          <p className="home_card_title"> Consultorio online</p>
          <p className="home-card_subtitle">
            Agiliza tus consultas atendiéndote
            <br /> desde tu casa.
          </p>
        </div>
        <div className="home_content_card">
          <p>
            <AiFillFileText
              style={{ color: "rgb(163, 163, 253,.5)", fontSize: "50px" }}
            />
          </p>
          <p className="home_card_title"> Consultorio online</p>
          <p className="home-card_subtitle">
            Agiliza tus consultas atendiéndote
            <br /> desde tu casa.
          </p>
        </div>
        <div className="home_content_card">
          <p>
            <AiOutlinePlus
              style={{ color: "rgb(163, 163, 253,.5)", fontSize: "50px" }}
            />
          </p>
          <p className="home_card_title"> Rapido y seguro</p>
          <p className="home-card_subtitle">
            Agiliza tus consultas atendiéndote
            <br /> desde tu casa.
          </p>
        </div>
      </div>
      <div>
        <Chat />
      </div>
      <div>
        <Services />
      </div>
    </>
  );
};
