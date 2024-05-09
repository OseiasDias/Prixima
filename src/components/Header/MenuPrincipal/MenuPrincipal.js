

import BarraTopo from '../BarraTopo/BarraTopo';
import styles from './Menu.module.css';








export default function Menu() {


    return (
        <>  
             
            <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top ${styles.menu}`}>
            <BarraTopo />
                <div className="container pt-3">
                    <a className={`navbar-brand ${styles.navbar_brand}`} href="#header">Prixima<span className={styles.dot}></span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#header">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#servicos">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#team">Team</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#blog" offset='200'>Blog</a>
                            </li>
                        </ul>
                        <a
                            href="#servicos"
                            className={`btn btn-brand ms-lg-2 px-5 ${styles.btn_comeca}`}
                        >
                            Iniciar
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
