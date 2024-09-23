import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../../Styles/Intro.css";
import foto1 from "../../img/imagen1.jpeg";
import foto2 from "../../img/imagen2.jpeg";
import foto3 from "../../img/imagen3.jpeg";

function Intro() {

  return (
<div>


<br />
    <div id="carouselExampleControlsNoTouching" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="3000">
               
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className='imagenes' src={foto1} alt="Infografia 1" />
                </div>
                    

                <div className="carousel-item">
                    <img className='imagenes' src={foto2} alt="Infografia 2" />
                </div>


                <div className="carousel-item">
                    <img className='imagenes' src={foto3} alt="Infografia 3" />
                </div>

                </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                        </button>
    </div>
</div>       

  )
}

export default Intro