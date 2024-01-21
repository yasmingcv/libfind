import { useEffect, useState } from 'react'
import CardBook from '../../components/CardBook/CardBook'
import './style.css'
import axios from 'axios'

function Search() {

    const [input, setInput] = useState([''])
    const [dataBooks, setDataBooks] = useState([])

    
        const fetchSearchBooks = async (name) => {
            console.log('entrorueroeo')
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}`)
                console.log('response');
                setDataBooks(response.data.items)

            } catch (error) {
                console.error('Erro ao buscar dados:', error)
            }

        }

        // input.onChange(fetchSearchBooks(input))
        //fetchSearchBooks('brasil')

    


   // console.log(dataBooks[0], input)

    return (
        <div className="search">
            <h2>Busque por títulos ou autores!</h2>

            <input type="search" value={input} onChange={(e) => { setInput(e.target.value) }} />

            <div className="book__list"></div>

            <div className='search__results'>
                
                {
                    dataBooks.map(book => {
                        return(
                            <CardBook key={book.id} infoBook={book.volumeInfo} />
                        )
                    })
                }

            </div>

            {/* {dataBooks.map(book => {
                return(
                    <h3 color='white'>{book.volumeInfo.title}</h3>
                )
                
            })} */}


        </div>
    )
}

export default Search