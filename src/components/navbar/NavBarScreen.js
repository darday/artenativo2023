import React from 'react'

export const NavBarScreen = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={"./assets/images/logos/arteNativo.png"} width="190vw" height="auto" alt=""></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/proyectos">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Noticias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Convenios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contactos</a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}
