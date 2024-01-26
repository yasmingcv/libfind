import { Link } from "react-router-dom"
import './style.css'

function CardBook({infoBook}) {

    let cover = infoBook.imageLinks ?  infoBook.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
    let title = infoBook.title.length > 52 ? `${infoBook.title.slice(0, 49)}...` : infoBook.title

    return (
        <div className="card__book">
            <img className='img__book' src={cover} alt="capa"></img>

            <div className="card__text">
                <div>
                    <h1>{title}</h1>
                    <p>{infoBook.authors} - {infoBook.publisher}</p>
                </div>

                <Link to='/livro/id' className="button__details">Saiba mais</Link>
            </div>

        </div>
    )
}

export default CardBook