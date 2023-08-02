import React from "react";
import "../views/MapaGoogle.css";

const MapaGoogle = () => {
  return (
    <div className="mapResponsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.169574078675!2d-65.24882092365651!3d-26.802728688619084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d039713f5b7%3A0xcd76cfeffc6e042f!2sAv.%20Am%C3%A9rica%201435%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1690996430253!5m2!1ses!2sar"
        width="600"
        height="450"
        
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
      ></iframe>
    </div>
  );
};

export default MapaGoogle;
