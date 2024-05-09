
import styles from './Blog.module.css';
import imgBlog1 from '../../assets/img/project1.jpg';
import imgBlog2 from '../../assets/img/project2.jpg';
import imgBlog3 from '../../assets/img/project3.jpg';

export default function Blog() {

    return (

        <section className={styles.seccao_blog}>

            <div className="container mt-5 pt-5">
                <div className='row text-center justify-content-center'>
                    <div className={` col-lg-7 ${styles.texto_top}`}>

                       
                        
                       

                        <h6>BLOG</h6>
                        <h2>Blog Posts</h2>
                        <p>
                        Contrary to popular belief, 
                        Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical
                         Latin literature from 45 BC, making
                          it over 2000 years old    </p>
                    </div>
                </div>
                <div className="row pt-5">

                    <div className="col-12 col-lg-4 col-md-6 ">

                        <figure className={styles.figura}>
                            <div >
                                <img src={imgBlog1} alt='imagem do team 1' className={`img-fluid`} />


                            </div>

                            <figcaption className={` p-4 ${styles.figC}`}>
                                <a href='#'>01 DEC, 2022</a>
                                <h4>Web Design trends in 2022</h4>
                                <p>Contrary to popular belief, Lorem
                                     Ipsum is not simply random text.
                                      It has roots in a piece of 
                                      classical Latin literature fromor</p>
                            </figcaption>
                        </figure>

                    </div>

                    <div className="col-12 col-lg-4 col-md-6 ">

                        <figure className={styles.figura}>
                            <div >
                                <img src={imgBlog2} alt='imagem do team 1' className={`img-fluid`} />


                            </div>

                            <figcaption className={` p-4 ${styles.figC}`}>
                                <a href='#'>01 DEC, 2022</a>
                                <h4>Web Design trends in 2022</h4>
                                <p>Contrary to popular belief, Lorem
                                     Ipsum is not simply random text.
                                      It has roots in a piece of 
                                      classical Latin literature fromor</p>
                            </figcaption>
                        </figure>

                    </div>

                    <div className="col-12 col-lg-4 col-md-6 ">

                        <figure  className={styles.figura}>
                            <div>
                                <img src={imgBlog3} alt='imagem do team 1' className={`img-fluid`} />


                            </div>

                            <figcaption className={` p-4 ${styles.figC}`}>
                                <a href='#'>01 DEC, 2022</a>
                                <h4>Web Design trends in 2022</h4>
                                <p>Contrary to popular belief, Lorem
                                     Ipsum is not simply random text.
                                      It has roots in a piece of 
                                      classical Latin literature fromor</p>
                            </figcaption>
                        </figure>

                    </div>
                </div>

            </div>

        </section>
    )
}