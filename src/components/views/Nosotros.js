import React from "react";
import "../views/Nosotros.css";
import { Row, Col } from "react-bootstrap";

const Nosotros = () => {
  return (
    <div className="bgSection">
      <section className="portadaNosotros d-flex justify-content-end align-items-end p-3">
        <div className="textPortada">
          <p>
            DROGUERÍA MEDICINA INTEGRAL SRL llevamos más de 30 años
            <br />
            acompañando al sector de la salud. Somos un eslabón
            <br />
            importante en la cadena de comercialización y distribución.
          </p>
        </div>
      </section>
      <article className="nosotros container py-5 mt-3">
        <div className="containerSect mb-2">
          <div className="p-3">
            <h2>Nosotros</h2>
            <hr />
            <p className="p-3">
              Droguería SILVETI nace como un emprendimiento familiar que
              apostaba al crecimiento en el año 80 como Quimica Textil. En el
              año 1991 Nace Medicina Integral srl convertiendoce en una Pyme
              sólida y bien posicionada.
              <br /> En sus comienzos la empresa contaba con dos integrantes y
              el dueño. Hoy conformamos MEDICINA INTEGRAL SRL un equipo de más
              de 25 personas.
              <br /> Trabajamos para lograr un posicionamiento de referencia en
              el sector al que pertenecemos y afirmamos nuestro deseo de seguir
              creciendo convencidos que estamos transitando ese camino y por
              sobre todas las cosas pensamos que somos capaces de lograrlo
              gracias a que nuestro mayor capital lo constituye el equipo de
              personas que conforman.
              <br /> Droguería MEDICINA INTEGRAL SRL se encuentra ubicada en la
              calle Av. Las America 1435, Tucumán Capital. Dicho inmueble es
              propiedad de la misma y ocupa una superficie de más de 700 mts
              cuadrados.
              <br /> El lugar se ha distribuido según funcionalidad de
              operatoria y necesidades administrativas. La superficie destinada
              a Depósito de mercadería abarca un total de aproximadamente 500
              mts cuadrados.
              <br /> Se encuentra entre los proyectos ampliar el espacio físico
              de almacenamiento a fin de seguir mejorando en lo que respecta a
              las tareas de logística y también la de incursionar en nuevas
              provincias.
            </p>
          </div>
        </div>
      </article>
      <article className="  ">
        <div className="">
          <Row>
            <Col sm={12} md={6} lg={6} className="g-0">
              <div className="bgMision d-flex justify-content-center align-items-center">
                <h3 className="text-white fs-1">Misión</h3>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="g-0">
              <div className="cardMision">
                <div className="cardContent">
                  <p className="card-body">
                    COMO ORGANIZACIÓN NOS INTERESA GENERAR UN AMBIENTE CALIDO
                    PARA LA OPERACIÓN DE LOS PROCESOS QUE SE CARACTERICE POR LA
                    COMUNICACIÓN , LA CONFIANZA, LA HONESTIDAD, LA
                    RESPONSABILIDAD PERSONALY EL RESPETO, CONVENCIDOS QUE
                    CUALQUIER COMPORTAMIENTO QUE SE DERIVE DE ESTOS VALORES
                    CONTRIBUIRA AL CLIMA IDEAL PARA EL CRECIMIENTO PERSONAL DE
                    CADA INTEGRANTE DE LA EMPRESA.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6} className="g-0">
              <div className="cardVision">
                <div className="cardContent">
                  <p className="card-body">
                    INTENTAMOS GENERAR UN AMBIENTE DE RESPETO MUTUO, DE DIALOGO
                    CORDIAL, INCENTIVANDO EL COMPROMISO , LA PARTICIPACION Y
                    CREANDO UN ESPACIO DE REALIZACION PERSONAL PARA QUIENES LA
                    CONFORMAN. PROCURAMOS HACER DE NUESTRA ACTIVIDAD UN NEGOCIO
                    RENTABLE QUE NOS PERMITA SEGUIR CRECIENDO PQ CREEMOS QUE DE
                    ESTA MANERA CONTRUBUIMOS AL DESARROLLO DEL SISTEMA DE SALUD
                  
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="g-0">
              <div className="bgMision d-flex justify-content-center align-items-center">
                <h3 className="text-white fs-1">Visión</h3>
              </div>
            </Col>
          </Row>
        </div>
      </article>
    </div>
  );
};

export default Nosotros;
