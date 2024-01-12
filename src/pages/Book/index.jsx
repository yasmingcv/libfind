import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import './style.css'
import { useState } from "react"

function Bookmark() {
    const [isBookmarked, setIsBookmarked] = useState(false)

    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked)
    }

    return (
        <div>
            {isBookmarked ? (
                <FaBookmark id='marked' className="bookmark" onClick={handleBookmarkClick} />
            ) : (
                <FaRegBookmark id='unmarked' className="bookmark" onClick={handleBookmarkClick} />
            )}
        </div>
    )
}

function Classification() {
    return (
        <p className="classification">Juvenile Ficton</p>
    )
}

function Book() {
    return (
        <div className="book">
            <img src="https://books.google.com/books/content?id=t_6VEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="capa do livro" />
            <div className="book__details">
                <div className="book__title">
                    <span className="title__text">
                        <h1 >O diário de um banana 1</h1>
                        <Bookmark />
                    </span>
                    <p className="book__autor">Jeff Kinney - BOOKSMILE</p>
                </div>




                <p className="book__description">Como o Greg diz no seu diário: Não esperem que eu me ponha para aqui com "Querido Diário" isto e "Querido Diário" aquilo. Felizmente para nós, o que o Greg diz e o que realmente faz são duas coisas muito diferentes.Não é fácil ser criança. E ninguém sabe isso melhor do que o Greg Heffley, que se vê aprisionado na escola preparatória, onde fracotes minorcaspidem os corredores com miúdos mais altos e malvados que já fazem a barba. Em O Diário de um Banana, o autor e ilustrador Jeff Kinney apresenta-nos um herói improvável.Como o Greg diz no seu diário: Não esperem que eu me ponha para aqui com "Querido Diário" isto e "Querido Diário" aquilo. Felizmente para nós, o que o Greg diz e o que realmente faz são duas coisas muito diferentes. O mundo está louco pela coleção O Diário de um Banana e pelo Jeff Kinney! The Sun Jeff Kinney está no topo, juntamente com J. K. Rowling, dos autores infantojuvenis mais bem-sucedidos do mundo.
                </p>

                <strong>224 páginas | Publicado em 21/10/2022</strong>

                <div className="classifications">
                    <Classification />
                    <Classification />
                    <Classification />
                </div>

                <button className="button__access">Acessar a prévia</button>

            </div>
        </div>
    )
}

export default Book