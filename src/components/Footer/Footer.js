import styles from './Footer.module.css'
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoYoutube, BiLogoInstagramAlt } from "react-icons/bi";



function Footer() {

    return (

        <footer className={`${styles.footer} `}>

            <div className={`${styles.linha}`}>
                <div className={`container pt-5  `}>

                    <div className={`row justify-content-center text-center`}>

                        <div className={`col-lg-8`}>
                            <div className={`navbar-brand ${styles.navbar_brand}`}>
                                <h2>Prixima<div></div>
                                </h2>
                            </div>
                            <p>Contrary to popular belief, Lorem
                                Ipsum is not simply random text. It has roots in
                                a piece of classical Latin literature from</p>

                            <div className={`col-auto ${styles.socias_rede}`}>
                                <BiLogoFacebookCircle className={styles.meus_icon} />
                                <BiLogoGithub className={styles.meus_icon} />
                                <BiLogoInstagramAlt className={styles.meus_icon} />
                                <BiLogoYoutube className={styles.meus_icon} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className={styles.footer_bottom}>
                    <p>
                    Copyright vicpra 2022. All rights Reserved <br />
                        <span>Distributed By ThemeWagon</span>
                    </p>
            </div>


        </footer>

    )
}

export default Footer