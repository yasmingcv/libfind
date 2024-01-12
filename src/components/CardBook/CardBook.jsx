import { Link } from "react-router-dom"
import './style.css'

function CardBook() {
    return (
        <div className="card__book">
            <img className='img__book' src="https://books.google.com/books/content?id=t_6VEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="capa"></img>

            <div className="card__text">
                <div>
                    <h1>O diário de um banana 1</h1>
                    <p>Jeff Kinney - Booksmile</p>
                </div>

                <Link to='/' className="button__details">Saiba mais</Link>
            </div>

        </div>
    )
}

export default CardBook