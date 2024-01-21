import { Link } from "react-router-dom"
import './style.css'

function CardBook({infoBook}) {

    
    //fetch

    let capaaa = ''

    if(!infoBook.imageLinks){
        capaaa = 'https://www.shutterstock.com/image-vector/copy-vector-icon-illustration-sign-260nw-2047612412.jpg'
    } else {
        capaaa = infoBook.imageLinks.thumbnail
    }

    console.log('chegou', infoBook.title);

    return (
        <div className="card__book">
            <img className='img__book' src={capaaa} alt="capa"></img>

            <div className="card__text">
                <div>
                    <h1>{infoBook.title}</h1>
                    <p>{infoBook.authors} - {infoBook.publisher}</p>
                </div>

                <Link to='/livro/id' className="button__details">Saiba mais</Link>
            </div>

        </div>
    )
}

export default CardBook