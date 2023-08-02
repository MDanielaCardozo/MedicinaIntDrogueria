import React from "react";
import { useEffect } from "react";
import "../views/Contacto.css";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bgSection">
      <section className="contacto container">
        <h2>Contacto</h2>
        <hr />
      </section>
    </div>
  );
};

export default Contacto;
