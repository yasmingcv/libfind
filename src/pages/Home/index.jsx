import './style.css'
import imghome from '../../assets/imghome.png'
import { Link } from "react-router-dom"
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <div>
            <div className='home__info'>
                <img src={imghome} alt='pic home' />
                <div className='info__text'>
                    <p>Explore os reinos infinitos da imaginação com <strong>LibFind</strong>, onde cada busca se torna uma jornada literária. Navegue por bibliotecas virtuais, desvende histórias entrelaçadas e descubra mundos inexplorados de conhecimento. Com uma busca, desvende as páginas de aventuras, romance e sabedoria. <strong>LibFind</strong> - O portal que transforma suas buscas em descobertas literárias extraordinárias.
                    </p>


                    <Link to='/buscar' className='button__text'>Comece agora</Link>

                </div>

                
            </div>
        </div>
    )
}

export default Home