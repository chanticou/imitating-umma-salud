import logo from "../../assets/images/logo-milenio.png";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="navBar_content_sticky">
        <div className="top-banner">
          <div>
            <p className="content-top_banner">
              ¡Conocé nuestras nuevas suscropciones mensuales para cuidar tu
              salud!
              <a className="navBar-span_information"> Más información</a>
            </p>
          </div>
        </div>
        <div className="navBar-container">
          <ul className="navBar-ul_container">
            <li>
              <div className="navBar-image_container">
                <img
                  className="navBar-image"
                  src="https://umasalud.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.72bd5597.webp&w=64&q=75"
                  alt="Logo"
                ></img>
              </div>
            </li>
            <div className="content_li">
              <li>
                <a>Inicio</a>
              </li>
              <li>
                <a>ÜMA para empresas</a>
              </li>
              <li>
                <a>Sumate al equipo</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Servicios</a>
              </li>
              <li>
                <div className="content_button">
                  <button className="loguin">Iniciar sesión</button>
                </div>
              </li>
              <li>
                <div className="content_button">
                  <button className="medical_loguin">Ingreso médico</button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
