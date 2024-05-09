import styles from './SliderSlimples.module.css'
import img1 from '../../assets/img/team_1.jpg'
import img2 from '../../assets/img/team_2.jpg'
import img3 from '../../assets/img/team_3.jpg'


export default function SimplesSlider() {


    return (

        <section className={` ${styles.seccao_simples}`}>

            <div className="container">

                <div className={`row justify-content-center`}>

                    <div className={`col-lg-10`}>


                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={img1} className={styles.imagem} alt="..." />
                                    <div className={` text-center ${styles.infromacao}`}>
                                        <h5>Oseias Dias</h5>
                                        <small>Programador Front-End</small>
                                        <p>Na Prixima, acreditamos que nosso maior diferencial reside em nossa equipe excepcional de profissionais talentosos e dedicados. Somos um grupo diverso de indivíduos com habilidades únicas e experiências variadas, unidos por uma paixão compartilhada pela tecnologia e um compromisso com a excelência.</p>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img2} className={styles.imagem} alt="..." />
                                    <div className={` text-center ${styles.infromacao}`}>

                                        <h5>Edgar Manue</h5>
                                        <small>Programador Full Stack</small>
                                        <p>Na Prixima, acreditamos que nosso maior diferencial reside em nossa equipe excepcional de profissionais talentosos e dedicados. Somos um grupo diverso de indivíduos com habilidades únicas e experiências variadas, unidos por uma paixão compartilhada pela tecnologia e um compromisso com a excelência.</p>

                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <img src={img3} className={styles.imagem} alt="..." />
                                    <div className={` text-center ${styles.infromacao}`}>

                                        <h5>Edgar Manue</h5>
                                        <small>Analista de Sistema</small>
                                        <p>Na Prixima, acreditamos que nosso maior diferencial reside em nossa equipe excepcional de profissionais talentosos e dedicados. Somos um grupo diverso de indivíduos com habilidades únicas e experiências variadas, unidos por uma paixão compartilhada pela tecnologia e um compromisso com a excelência.</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </section>

    );
}

