import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import './style.css'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'
const moment = require('moment')


function Bookmark({ id, dataBook, cover }) {
    const svdBooks = localStorage.getItem('svdBooks')
    let savedBooks = svdBooks ? JSON.parse(svdBooks) : []

    const [isBookmarked, setIsBookmarked] = useState(savedBooks.find(obj => obj.id === id) !== undefined)

    const handleBookmarkClick = () => {
        
        if (isBookmarked) {
            setIsBookmarked(false)
            savedBooks.splice(savedBooks.indexOf(savedBooks.find(obj => obj.id === id)), 1)
        } else {
            setIsBookmarked(true)
            savedBooks.push({ 
                id: id, 
                title: dataBook.title, 
                authors: dataBook.authors, 
                publisher: dataBook.publisher, 
                cover: cover 
            })
        }

        localStorage.setItem('svdBooks', JSON.stringify(savedBooks))
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

function Classification({ classification }) {
    return (
        <p className="classification">{classification}</p>
    )
}

function Book() {
    const [dataBook, setDataBook] = useState([])
    const params = useParams()
    let cover = dataBook.imageLinks ? dataBook.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
    const navigate = useNavigate()

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
                    title: "Ops! Livro não encontrado :(",
                    confirmButtonText: "OK",
                })
                navigate("/buscar")

            })
    }, [])

    return (
        <div className="book">
            <img src={cover} alt="capa do livro" />
            <div className="book__details">
                <div className="book__title">
                    <span className="title__text">
                        <h1>{dataBook.title}</h1>
                        <Bookmark id={params.id} dataBook={dataBook} cover={cover} />
                    </span>
                    <p className="book__autor">{dataBook.authors}</p>
                </div>



                <p className="book__description" dangerouslySetInnerHTML={{ __html: dataBook.description }} />

                <strong>{dataBook.pageCount} páginas | Publicado em {moment(dataBook.publishedDate).format('DD/MM/YYYY')}</strong>

                <div className="classifications">
                    {
                        dataBook.categories ? dataBook.categories.map((category) => {
                            return <Classification classification={category} />
                        }) : null
                    }
                </div>

                <a target="_blank" className="button__access" href={dataBook.previewLink}>Acessar a prévia</a>

            </div>
        </div>
    )
}

export default Book