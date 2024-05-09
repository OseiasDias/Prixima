import styles from './Slider.module.css'



export default function Slider() {



    return (

        <section className='seccao-slider' id="slideR">

            <div id="carouselExampleCaptions" className={`carousel slide`} data-bs-ride="carousel">

                <div className="carousel-inner ">
                    <div className={`carousel-item active w-100 vh-100 ${styles.slider_1}`}>
                        <div className={`carousel-caption ${styles.slider_text}`}>
                            <h6>We craft digital experiances</h6>
                            <h1>Design Driven For <br />Professionals</h1>
                            <button href="#" className={`btn px-5 m-1  py-2 ${styles.btn_brand}`}>Get Started</button>
                            <button href="#" className="btn btn-outline-light m-1 px-5 py-2">Our work</button>
                        </div>
                    </div>
                    <div className={`carousel-item w-100 vh-100 ${styles.slider_2}`}>
                        <div className={`carousel-caption ${styles.slider_text}`}>
                            <h6>We craft digital experiances</h6>
                            <h1>We craft digital<br />experiances</h1>
                            <button href="#" className={`btn px-5 m-1  py-2 ${styles.btn_brand}`}>Get Started</button>
                            <button href="#" className="btn btn-outline-light m-1 px-5 py-2">Our work</button>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

        </section>

    );
}