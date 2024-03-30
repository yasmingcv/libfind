import { Link } from "react-router-dom"
import './style.css'

function CardBook({id, cover, title, authors, publisher}) {
    console.log(cover);

    //cover = infoBook.volumeInfo.imageLinks ?  infoBook.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
    let titleFormatted = title.length > 52 ? `${title.slice(0, 49)}...` : title

    return (
        <div className="card__book">
            <img className='img__book' src={cover} alt="capa"></img>

            <div className="card__text">
                <div>
                    <h1>{titleFormatted}</h1>
                    <p>{authors} - {publisher}</p>
                </div>

                <Link to={'/livro/' + id} className="button__details">Saiba mais</Link>
            </div>

        </div>
    )
}

export default CardBook