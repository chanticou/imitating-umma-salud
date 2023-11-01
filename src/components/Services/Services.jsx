import "./Services.css";

export const Services = () => {
  return (
    <>
      <div className="content_title">
        <p>¿QUÉ HACEMOS EN ÜMA?</p>
        <h1>Nustros Servicios</h1>
      </div>
      <div className="content_cards">
        <div className="content_card_services">
          <div className="content_data_services">
            <div>
              <img
                src="https://umasalud.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon1.b0caf1e5.webp&w=128&q=75"
                alt=""
              />
            </div>

            <p className="title_card">Diagnostico asistido</p>
            <p className="sub_title_card">
              Identifique posibles patologías mediante un algoritmo predictivo.
              <p className="free_green">¡Es gratuito!</p>
            </p>
          </div>
        </div>
        <div className="content_card_services">
          <div className="content_data_services">
            <div>
              <img
                src="https://umasalud.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon2.95297548.webp&w=128&q=75"
                alt=""
              />
            </div>
            <p className="title_card">Mi especialista</p>
            <p className="sub_title_card">
              Atiendase con los mejores especialistas sin largas esperas y desde
              la comodidad de su casa.
            </p>
          </div>
        </div>
        <div className="content_card_services">
          <div className="content_data_services">
            <div>
              <img
                src="https://umasalud.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon6.231d7d2a.webp&w=128&q=75"
                alt=""
              />
            </div>
            <p className="title_card">Medicina laboral</p>
            <p className="sub_title_card">
              Profesionales habilitados para justificar ausencias laborales por
              enfermedad.
            </p>
          </div>
        </div>
        <div className="content_card_services">
          <div className="content_data_services">
            <div>
              <img
                src="https://umasalud.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon3.d8a0c701.webp&w=128&q=75"
                alt=""
              />
            </div>
            <p className="title_card">Seguimiento COVID</p>
            <p className="sub_title_card">
              Realice un seguimiento de sus síntomas por COVID durante diez
              días.
            </p>
          </div>
        </div>
        <div className="content_card_services">
          <div className="content_data_services">
            <div>
              <img
                src="https://umasalud.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon4.50d42725.webp&w=128&q=75"
                alt=""
              />
            </div>
            <p className="title_card">Pastillero virtual</p>
            <p className="sub_title_card">
              Notificaciones diarias para que nunca olvide tomar sus
              medicamentos.
              <p className="free_green">¡Es gratuito!</p>
            </p>
          </div>
        </div>
        <div className="content_card_services">
          <div className="content_data_services">
            <div>
              <img
                src="https://umasalud.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon5.0b597dbe.webp&w=128&q=75"
                alt=""
              />
            </div>
            <p className="title_card">Seguimiento autónomo personalizado</p>
            <p className="sub_title_card">
              Realice un monitoreo de su estado de salud sin moverse de su casa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
