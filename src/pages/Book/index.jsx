import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import './style.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'
const moment = require('moment')


function Bookmark(book, dataBook) {
    const [isBookmarked, setIsBookmarked] = useState(false)

    const svdBooks = localStorage.getItem('svdBooks')
    let savedBooks = svdBooks ? JSON.parse(svdBooks) : []

    const handleBookmarkClick = () => {
        console.log(dataBook);
        if(isBookmarked){
            setIsBookmarked(false)
            savedBooks = savedBooks.splice(savedBooks.indexOf(book), 1)
        } else {
            setIsBookmarked(true)
            savedBooks.push({id: book.book, title: dataBook.title, authors: dataBook.authors, publisher: dataBook.publisher})
        }

        localStorage.setItem('svdBooks', JSON.stringify(savedBooks))
        console.log(savedBooks);
        console.log(savedBooks.indexOf(book));
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

function Classification({classification}) {
    return (
        <p className="classification">{classification}</p>
    )
}

function Book() {
    const [dataBook, setDataBook] = useState([])
    const params = useParams()
    let cover = dataBook.imageLinks ?  dataBook.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'

    useEffect(() => {

        Swal.showLoading()

        axios.get(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
            .then(response => {
                setDataBook(response.data.volumeInfo)
                Swal.close()
            }).catch(error => {
                Swal.close()
                console.error('Erro ao buscar dados:', error)
                Swal.fire({
                    title: "Ops! Não encontramos nenhum livro :(",
                    confirmButtonText: "OK",
                })
            })
    }, [])

   
    
    return (
        <div className="book">
            <img src={cover} alt="capa do livro" />
            <div className="book__details">
                <div className="book__title">
                    <span className="title__text">
                        <h1>{dataBook.title}</h1>
                        <Bookmark book={params.id} dataBook={dataBook}/>
                    </span>
                    <p className="book__autor">{dataBook.authors}</p>
                </div>



                <p className="book__description" dangerouslySetInnerHTML={{__html: dataBook.description}}/>

                <strong>{dataBook.pageCount} páginas | Publicado em {moment(dataBook.publishedDate).format('DD/MM/YYYY') }</strong>

                <div className="classifications">
                    {
                        dataBook.categories ? dataBook.categories.map((category) => {
                            return <Classification classification={category}/>
                        }) : null
                    }
                </div>

                <a target="_blank" className="button__access" href={dataBook.previewLink}>Acessar a prévia</a>

            </div>
        </div>
    )
}

export default Book