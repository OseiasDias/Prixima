import styles from './Millestone.module.css'



export default function Millestone() {

    return (

        <section className= {`  ${styles.millestone_seccao} `}>

            <div className="container ">

                <div className='row'>

                    <div className={`col-12 col-md-6 col-lg-3 ${styles.Millestone}`}>

                        <h1>90K+</h1>
                        <span>Happy Clients</span>

                    </div>

                    <div className={`col-12 col-md-6 col-lg-3 ${styles.Millestone}`}>

                        <h1>45M</h1>
                        <span>Lines of code</span>
                        


                    </div>


                    <div className={`col-12 col-md-6 col-lg-3 ${styles.Millestone}`}>

                    

                        <h1>190</h1>
                        <span>Total Downloads</span>

                    </div>

                    <div className={`col-12 col-md-6 col-lg-3 ${styles.Millestone}`}>

                    

                        <h1>380K</h1>
                        <span>YouTube Subscribers</span>

                    </div>

                </div>


            </div>



        </section>
    )
}