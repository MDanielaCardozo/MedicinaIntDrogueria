import React from 'react';
import { useEffect } from 'react';

const Contacto = () => {

    useEffect(() => {
        window.scrollTo(0,0);
      }, []);

    return (
        <div className='py-5'>
            
            <article className='quienes py-5'>
                <div className='container py-5'>
                    <h2>Contacto</h2>
                    <hr />
                </div>
            </article>
        </div>
    );
};

export default Contacto;