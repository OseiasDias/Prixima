
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider'
import About from '../components/About/About';
import Services from '../components/Servicos/Servicos';
import Team from '../components/Team/Team';
import SliderSimples from '../components/SliderSimple/SliderSlimple';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Millestone from '../components/Millestone/Millestone';


function UnicaPagina() {

    return (
        <>

            <div id="header" className='pt-3'>
                <Header />
                <Slider />
            </div>
            

            <div id="about" className='pt-3'>
                <About />
            </div>
            <div id="servicos" className='pt-3'>
                <Services />
                <Millestone />
            </div>


            <div id="team" className='pt-3'>
                <Team />
                <SliderSimples />
            </div>

           
            <div id="blog" className='pt-3'>
                <Blog />
            </div>

            <Footer />

        
        </>
    )
}

export default UnicaPagina;