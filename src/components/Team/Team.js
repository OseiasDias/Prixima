import styles from './Team.module.css'
import imgTeam1 from '../../assets/img/team_1.jpg'
import imgTeam2 from '../../assets/img/team_2.jpg'
import imgTeam3 from '../../assets/img/team_3.jpg'

import { BiLogoFacebookCircle, BiLogoGithub, BiLogoYoutube, BiLogoInstagramAlt } from "react-icons/bi";


export default function Team() {

    return (

        <section className={styles.seccao_team}>

            <div className="container mt-5 pt-5">
                <div className='row text-center justify-content-center'>
                    <div className={` col-lg-7 ${styles.texto_top}`}>
                        <h6>TEAM</h6>
                        <h2>TEAM MEMBERS</h2>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply
                            random text. It has roots in a piece of classical Latin
                            literature from 45 BC, making it over 2000 years old
                        </p>
                    </div>
                </div>
                <div className="row pt-5">

                    <div className="col-12 col-lg-4 col-md-4 ">

                        <figure>
                            <div className={styles.figura}>
                                <img src={imgTeam1} alt='imagem do team 1' className={`img-fluid`} />


                                <div className={`col-auto ${styles.socias_rede}`}>
                                    <BiLogoFacebookCircle className={styles.meus_icon} />
                                    <BiLogoGithub className={styles.meus_icon} />
                                    <BiLogoInstagramAlt className={styles.meus_icon} />
                                    <BiLogoYoutube className={styles.meus_icon} />
                                </div>

                            </div>

                            <figcaption className={styles.figC}>
                                <h4>Marvin McKinney</h4>
                                <p>Marketing Coordinator</p>
                            </figcaption>
                        </figure>

                    </div>

                    <div className="col-12 col-lg-4 col-md-4 ">

                        <figure>
                            <div className={styles.figura}>
                                <img src={imgTeam2} alt='imagem do team 1' className={`img-fluid`} />


                                <div className={`col-auto ${styles.socias_rede}`}>
                                    <BiLogoFacebookCircle className={styles.meus_icon} />
                                    <BiLogoGithub className={styles.meus_icon} />
                                    <BiLogoInstagramAlt className={styles.meus_icon} />
                                    <BiLogoYoutube className={styles.meus_icon} />
                                </div>

                            </div>
                            


                            <figcaption className={styles.figC}>
                                <h4>Darrell Steward</h4>
                                <p>Software Developer</p>
                            </figcaption>
                        </figure>

                    </div>

                    <div className="col-12 col-lg-4 col-md-4 ">

                        <figure>
                            <div className={styles.figura}>
                                <img src={imgTeam3} alt='imagem do team 1' className={`img-fluid`} />


                                <div className={`col-auto ${styles.socias_rede}`}>
                                    <BiLogoFacebookCircle className={styles.meus_icon} />
                                    <BiLogoGithub className={styles.meus_icon} />
                                    <BiLogoInstagramAlt className={styles.meus_icon} />
                                    <BiLogoYoutube className={styles.meus_icon} />
                                </div>

                            </div>

                            <figcaption className={styles.figC}>
                                <h4>Kathryn Murphy</h4>
                                <p>Ethical Hacker</p>
                            </figcaption>
                        </figure>

                    </div>
                </div>

            </div>

        </section>
    )
}