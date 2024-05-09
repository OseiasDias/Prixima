import { FaEnvelope } from 'react-icons/fa';
import { BiSolidPhoneCall, BiLogoFacebookCircle, BiLogoGithub, BiLogoYoutube, BiLogoInstagramAlt } from "react-icons/bi";
import styles from './BarraTopo.module.css';

export default function BarraTopo(){

    return (
        <section className={`p-1 text-white sticky-top ${styles.cor_fundo}`}>
            <div className='container'>
                <div className="row justify-content-between d-flex ">

                    <div className="col-auto">
                        <span className={`me-sm-2 mt-1 ${styles.meus_icon}`}><FaEnvelope />oseiasdias1953@gmail.com</span>
                        
                        <span className={`ms-sm-2 mt-1 ${styles.meus_icon}`}><BiSolidPhoneCall />+244 938 629 915</span>
                    </div>
                    <div className={`col-auto ${styles.link_socias}`}>
                        <a href='www.facebook.com'><BiLogoFacebookCircle className={styles.meus_icon} /></a>
                        <a href='www.facebook.com'><BiLogoGithub className={styles.meus_icon} /></a>
                        <a href='www.facebook.com'><BiLogoInstagramAlt className={styles.meus_icon} /></a>
                        <a href='www.facebook.com'><BiLogoYoutube className={styles.meus_icon} /></a>
                    </div>

                </div>
            </div>
        </section>
    )
}