import './style.css'
import imghome from '../../assets/imghome.png'
import { Link } from "react-router-dom"
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <div className='container__home'>
            <div className='home__info'>
                <img src={imghome} alt='pic home' />
                <div className='info__text'>
                    <p>Explore os reinos infinitos da imaginação com <strong>LibFind</strong>, onde cada busca se torna uma jornada literária. Navegue por bibliotecas virtuais, desvende histórias entrelaçadas e descubra mundos inexplorados de conhecimento. Com uma busca, desvende as páginas de aventuras, romance e sabedoria. <strong>LibFind</strong> - O portal que transforma suas buscas em descobertas literárias extraordinárias.
                    </p>

                    <Link to='/buscar'>
                        <button class="home__button">
                            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span class="text">Comece agora</span>
                            <span class="circle"></span>
                            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                        </button>
                    </Link>


                </div>


            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home