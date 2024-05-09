import styles from './Servicos.module.css'
import img1 from '../../assets/img/icon1.png'
import img2 from '../../assets/img/icon2.png'
import img3 from '../../assets/img/icon3.png'
import img4 from '../../assets/img/icon4.png'
import img5 from '../../assets/img/icon5.png'
import img6 from '../../assets/img/icon6.png'


export default function Servicos(){

    return(

        <section className="seccao_servicos pt-5 mt-5" id="servico-sec">

            <div className="container ">

                <div className="row justify-content-center text-center">
                <div className={`col-lg-7 ${styles.header}`}>
                        <h6>OUR SERVICES</h6>
                        <h3>What We Do?</h3>
                        <p>Contrary to popular belief, Lorem
                             Ipsum is not simply random text.
                              It has roots in a piece of classical 
                              Latin literature from 45 BC, making
                               it over 2000 years old</p>

                    </div>

                </div>

                <div className="row mt-5">
                 
                    <div className="col-12 col-lg-4 col-md-6 text-center">

                        <div className={styles.margin}>
                                <figure>
                                    <img src={img1} alt="..."  className='mx-auto my-3 d-block'/>

                                    <figcaption >
                                          <h5>Digital Marketing</h5>
                                          <p>Contrary to popular belief,
                                             Lorem Ipsum is not simply random 
                                             text. It has roots in a piece of 
                                             classical Latin literature from</p>
                                    </figcaption>
                                </figure>
                        </div>

                    </div>

                    <div className="col-12 col-lg-4 col-md-6 text-center">

                        <div className={styles.margin}>
                                <figure>
                                    <img src={img2} alt="..."  className='mx-auto my-3 d-block'/>

                                    <figcaption >
                                          <h5>Logo Designing</h5>
                                          <p>Contrary to popular belief,
                                             Lorem Ipsum is not simply random 
                                             text. It has roots in a piece of 
                                             classical Latin literature from</p>
                                    </figcaption>
                                </figure>
                        </div>

                    </div>

                    <div className="col-12 col-lg-4 col-md-6 text-center">

                        <div className={styles.margin}>
                                <figure>
                                    <img src={img3} alt="..."  className='mx-auto my-3 d-block'/>

                                    <figcaption >
                                          <h5>Buisness consulting</h5>
                                          <p>Contrary to popular belief,
                                             Lorem Ipsum is not simply random 
                                             text. It has roots in a piece of 
                                             classical Latin literature from</p>
                                    </figcaption>
                                </figure>
                        </div>

                    </div>

                    <div className="col-12 col-lg-4 col-md-6 text-center">

                        <div className={styles.margin}>
                                <figure>
                                    <img src={img4} alt="..."  className='mx-auto my-3 d-block'/>

                                    <figcaption >
                                          <h5>Videography</h5>
                                          <p>Contrary to popular belief,
                                             Lorem Ipsum is not simply random 
                                             text. It has roots in a piece of 
                                             classical Latin literature from</p>
                                    </figcaption>
                                </figure>
                        </div>

                    </div>

                    <div className="col-12 col-lg-4 col-md-6 text-center">

                        <div className={styles.margin}>
                                <figure>
                                    <img src={img5} alt="..."  className='mx-auto my-3 d-block'/>

                                    <figcaption >
                                          <h5>Brand Identity</h5>
                                          <p>Contrary to popular belief,
                                             Lorem Ipsum is not simply random 
                                             text. It has roots in a piece of 
                                             classical Latin literature from</p>
                                    </figcaption>
                                </figure>
                        </div>

                    </div>

                    <div className="col-12 col-lg-4 col-md-6 text-center">

                        <div className={styles.margin}>
                                <figure>
                                    <img src={img6} alt="..."  className='mx-auto my-3 d-block'/>

                                    <figcaption >
                                          <h5>Ethical Hacking</h5>
                                          <p>Contrary to popular belief,
                                             Lorem Ipsum is not simply random 
                                             text. It has roots in a piece of 
                                             classical Latin literature from</p>
                                    </figcaption>
                                </figure>
                        </div>

                    </div>
                    

                </div>

            </div>

        </section>
    )
}