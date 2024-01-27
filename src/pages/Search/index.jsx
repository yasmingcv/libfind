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
                setDataBooks(response.data.items)
                Swal.close()
            }).catch(error => {
                Swal.close()
                console.error('Erro ao buscar dados:', error)
                Swal.fire({
                    title: "Ops! Não encontramos nenhum livro :(",
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
                // onBlur={ input === '' ? null  :  searchBooks }
                onKeyDown={(e) => e.key === 'Enter' && searchBooks()}
            />

            <div className="book__list"></div>

            {

                <div className='search__results'>

                    {
                        dataBooks.map(book => {
                            return (
                                <CardBook key={book.id} infoBook={book} />
                            )
                        })
                    }

                </div>
            }


        </div>
    )
}

export default Search