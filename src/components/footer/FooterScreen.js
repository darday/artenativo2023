import React from 'react'
import './footer.css'

export const FooterScreen = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-12 col-md-6'>
                        <h5>Contactos:</h5>
                        <label><i className="fas fa-phone"></i>+593 992774388 </label><br></br>
                        <label><i className="fas fa-phone"></i>032 610 215</label><br></br>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h5>Correo:</h5>
                        <label><i className="fas fa-envelope"></i> fundacionartenativo@gmail.com</label>
                        <h5>Dirección:</h5>
                        <label><i className="fas fa-map-marker-alt"></i> Avenida Edelberto Bonilla Oleas y Puruhá <br></br>Riobamba - Ecuador</label>

                    </div>
                  
                </div>

            </div>
            
        </footer>
    )
}
