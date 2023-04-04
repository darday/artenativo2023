import React from 'react'
import { CarouselScreen } from '../carousel/CarouselScreen'
import { FooterScreen } from '../footer/FooterScreen'
import { NavBarScreen } from '../navbar/NavBarScreen'

export const IndexScreen = () => {
    return (
        <>
            <NavBarScreen />
            <CarouselScreen />

            <div className='container'>
                <br></br>
                {/* <h1 className='text-center'>FUNDACIÓN ARTE NATIVO</h1> */}
                <br></br>
                <br></br>
                <br></br>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>
                        <h2 className='text-center'>¿QUIÉNES SOMOS?</h2>
                        <br></br>
                        <p>La Fundación Arte Nativo  Flores Franco, fue creada en el 15 de septiembre del año 2000, para apoyar el desarrollo biocultural de las personas menos favorecidos en el Ecuador. </p>
                        <p>Es una organización que se crea entre indígenas y mestizos el 15 Septiembre del 2000, con fines sociales, educativos y culturales, inspirada en la justicia social y la solidaridad con los sectores más vulnerables, rurales y urbanos, para mejorar su calidad de vida. </p>


                    </div>
                    <div className='col-md-5'>
                        <center>
                            <img src={"./assets/images/fotos/img1.jpeg"} width="70%" style={{ borderRadius: '50px' }} height="auto" alt=""></img>
                        </center>
                    </div>
                    <div className='col-md-1'></div>

                </div>

                {/*------------------------ MISION VISION OBJETIVOS--------------------------------- */}

                <div className="card-group" style={{ textAlign: 'justify', paddingTop: '15vh' }}>
                    <div className="card" style={{ border: '0px' }}>
                        <div className='text-center'>
                            <img className='center-text' src={"./assets/images/svg/mision.svg"} width="20%" style={{ textAlign: 'center !important' }} height="auto" alt=""></img>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title text-center">Misión</h5>
                            <p className="card-text">
                                Trabajar para impulsar el desarrollo biocultural sostenible de pueblos indígenas y mestizos a través de programas y
                                proyectos que revitalicen la memoria y diversidad cultural tangible e intangible; con enfoques: interculturalidad, equidad de género, intergeneracional y ambiental, para mejorar la vida de sectores más vulnerables.
                            </p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                    </div>
                    <div className="card" style={{ border: '0px' }}>
                        <div className='text-center'>
                            <img className='center-text' src={"./assets/images/svg/eye.svg"} width="20%" style={{ textAlign: 'center !important' }} height="auto" alt=""></img>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title text-center">Visión</h5>
                            <p className="card-text">
                                Fomentar y promover lo biocultural, como un medio hacia el desarrollo humano sostenible, trabajando en la investigación, revitalización, promoción y divulgación del patrimonio cultural, el acceso a los derechos culturales, el impulso y desarrollo de la gestión; así como la formación, creación.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ border: '0px' }}>

                        <div className='text-center'>
                            <img className='center-text' src={"./assets/images/svg/diamond.svg"} width="20%" style={{ textAlign: 'center !important' }} height="auto" alt=""></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Objetivos</h5>
                            <p className="card-text " >
                                <>
                                    <label>
                                        1.- Impulsar procesos de formación con grupos de atención prioritaria, con enfoques de derechos de género, ambiental, interculturalidad, equidad social y generacional.
                                    </label><br></br>
                                    <label>
                                        2.-Valorar y revitalizar la identidad cultural, las expresiones
                                        artísticas ,artesanales, saberes y conocimientos ancestrales, patrimoniales y la diversidad cultural.
                                    </label><br></br>
                                    <label>
                                        3.-Promover procesos productivos con enfoque de sostenibilidad, solidaridad y cohabitar con la naturaleza.
                                    </label><br></br>
                                    <label>
                                        4.-Implementar proyectos bio-culturales, que mejoren la calidad de vida de sectores menos favorecidos.
                                    </label>
                                </>


                            </p>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <div>
                    <h1 className='text-center'>TE PUEDE INTERESAR</h1>
                    <br></br>
                    <br></br>
                    <div className="row row-cols-1 row-cols-md-3 g-4 text-center justify-content-center">
                        <div className="col">
                            <div className="card h-100" style={{ border: 'none' }}>
                                <a href="/equipo-alquiler">
                                    <img className='center-text' src={"./assets/images/svg/projects.png"} width="40%" style={{ textAlign: 'center !important' }} height="auto" alt=""></img>
                                </a>
                                <div className="card-body">
                                    <a href="/proyectos">
                                        <button type="button" className="btn btn-outline-success camping-letters">
                                            PROYECTOS DE LA FUNDACIÓN
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100" style={{ border: 'none' }}>
                                <a href="/equipo-venta">
                                    <img className='center-text' src={"./assets/images/svg/news.png"} width="40%" style={{ textAlign: 'center !important' }} height="auto" alt=""></img>
                                </a>

                                <div className="card-body">
                                    <a href="/equipo-venta">
                                        <button type="button" className="btn btn-outline-success camping-letters">
                                            NOTICIAS DE LA FUNDACIÓN
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div>
                <h1 className='text-center'>CONTACTACTOS</h1>
                <div className="container ">
                    

                    <div className="row" style={{ textAlign: 'justify', justifyContent: "center", alignItems: "center", display: "flex" }}>

                        <div className="col-md-5" style={{ margin: "10px" }} >
                            {/* <p >Quieres Aventurarte salir de la rutina diaria y del estrés de la ciudad? Si es así Acompañanos!!! Tenemos un plan perfecto para ti, contamos con
                             las rutas más divertidas y hermosas que tiene la provincia de <b>Chimborazo</b> vive estas aventuras junto a guias amigables y experimentados 
                             que te ayudarán a que disfrutes de la maravillosa naturaleza en su máximo esplendor.
                        </p> */}
                            <label><b>Celular: </b><i className="fas fa-phone"></i>+593 992774388 </label><br></br>
                            <label><b>Convencional: </b><i className="fas fa-phone"></i>032 610 215 </label><br></br>

                            <label><b>Correo: </b><i className="fas fa-envelope"></i> fundacionartenativoecuador@gmail</label>
                            <label><b>Dirección: </b><i className="fas fa-map-marker-alt"></i> Avenida Edelberto Bonilla Oleas y Puruhá <br></br>Riobamba - Ecuador</label><br></br>
                            <a href='https://www.facebook.com/search/top?q=fundacion%20arte%20nativo' style={{textDecoration:'none',color:'black'}}>
                                <p style={{marginBottom:'0vh'}}><i class="fab fa-facebook-square fa-lg"></i> fundacion arte nativo</p>
                            </a>
                            <a href='https://www.instagram.com/fund_artenativo/'  style={{textDecoration:'none',color:'black',padding:'0px important'}}     >
                                <p style={{marginBottom:'0vh'}}><i class="fab fa-instagram fa-lg"></i> fund_artenativo</p>
                            </a>



                        </div>

                        <div className="col-md-5" style={{ margin: "10px" }}>
                            <img src={`./assets/images/principal/machay1.jpg`} className="rounded img-fluid img-thumbnail" alt="" width="100%" height="auto" />

                        </div>
                    </div>
                </div>

            </div>



            <br></br>
            <br></br>
            <br></br>
            <FooterScreen />

        </>
    )
}
