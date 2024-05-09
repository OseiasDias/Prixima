import styles from './About.module.css'
import img1 from '../../assets/img/icon1.png'
import img2 from '../../assets/img/icon2.png'
import img3 from '../../assets/img/icon3.png'
import imgAbout from '../../assets/img/about.png'

export default function About(){

    return(

        <section className={styles.About}>

            <div className="container">

                <div className="row pt-5 justify-content-center">

                    <div className="col-12 col-lg-6 col-md-10 pt-5 mx-center">

                        <div className={`pt-5 mt-5 ${styles.margem}`}>

                            <figure className="d-flex justify-content-between">
                                <img src={img1} alt="Icon 1" className={`me-4 ${styles.imagem}`} />

                                <figcaption>
                                    <h5>Digital Marketing</h5>
                                    <p>It is a long established fact
                                         that a reader will be distracted 
                                         by the readable content of a page</p>
                                </figcaption>
                                
                            </figure>

                            <figure className="d-flex justify-content-between">
                                <img src={img2} alt="Icon 2" className={`me-4 ${styles.imagem}`} />

                                <figcaption>
                                    <h5>E-mail Marketing</h5>
                                    <p>It is a long established fact
                                         that a reader will be distracted 
                                         by the readable content of a page</p>
                                </figcaption>
                                
                            </figure>
                            <figure className="d-flex justify-content-between">
                                <img src={img3} alt="Icon 3" className={`me-4 ${styles.imagem}`} />

                                <figcaption>
                                    <h5>Buisness Marketing</h5>
                                    <p>It is a long established fact
                                         that a reader will be distracted 
                                         by the readable content of a page</p>
                                </figcaption>
                                
                            </figure>


                        </div>

                    </div>

                    <div className="col-12 col-lg-6 col-md-10 pt-5  mx-center">
                            <img src={imgAbout} alt="Imagem About" className={`img-fluid ${styles.imgAbout}`} />
                    </div>

                </div>


            </div>

        </section>
    )
}