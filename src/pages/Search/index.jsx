import { useCallback, useState } from 'react'
import CardBook from '../../components/CardBook/CardBook'
import './style.css'
import axios from 'axios'
import Swal from 'sweetalert2'

function Search() {

    const [input, setInput] = useState([''])
    const [dataBooks, setDataBooks] = useState([])


    const searchBooks = useCallback(() => {

        Swal.showLoading()

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
            .then(response => {
                if (response.data.totalItems !== 0) {
                    setDataBooks(response.data.items)
                    Swal.close()
                } else {
                    Swal.fire({
                        title: "Ops! Não encontramos nenhum livro :(",
                        confirmButtonText: "OK",
                    })
                }
            }).catch(error => {
                Swal.close()
                console.error('Erro ao buscar dados:', error)
                Swal.fire({
                    title: "Ops! Tivemos um erro inesperado :( Tente novamente mais tarde.",
                    confirmButtonText: "OK",
                })
            })
    }, [input])

    return (
        <div className="search">


            <h2>Busque por títulos ou autores!</h2>

            <input
                type="search"
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
                onKeyDown={(e) => e.key === 'Enter' && searchBooks()}
            />

            <div className="book__list"></div>

            {

                <div className='search__results'>

                    {
                        dataBooks != null ?

                            dataBooks.map(book => {
                                return (

                                    <CardBook
                                        key={book.id}
                                        id={book.id}
                                        cover={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
                                        title={book.volumeInfo.title}
                                        authors={book.volumeInfo.authors}
                                        publisher={book.volumeInfo.publisher}
                                    />
                                )


                            })

                            : null


                    }

                </div>
            }


        </div>
    )
}

export default Search