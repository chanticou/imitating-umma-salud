import "./HeroContent.css";

export const HeroContent = () => {
  return (
    <>
      <div className="content_heroContent">
        <div className="sub_content_heroContent">
          <p className="title_heroContent">
            Consultas médicas
            <br /> Online 24/7
          </p>
          <p className="subtitle_heroContent">
            Agenda un turno en nuestra guardia sin intermediarios y ten tu
            consulta por videollamada en la comodidad de tu hogar.
          </p>
          <p className="subtitle_heroContent_2">
            ¡Sin costo para afiliados de IOMA!
          </p>
          <button className="heroContent_button">Regístrate en ÜMA</button>
        </div>
        <div className="content_image_heroContent">
          <img
            className="image_heroContent"
            src="https://umasalud.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIomaUma.4b471064.webp&w=2048&q=100"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
