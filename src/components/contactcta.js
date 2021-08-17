import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Contactcta() {
    let location = useLocation();
    if (location.pathname.match("contact")){
            return null;
    }
    return (
        <div className="contact-cta">
            <h1 className="contact-cta__title">Interrested in doing a project together?</h1>
           
              <button className="contact-cta__btn"><Link to="/contact">Contact me</Link> </button>
           
        </div>
    )
}

export default Contactcta;
