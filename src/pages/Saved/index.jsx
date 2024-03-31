import CardBook from '../../components/CardBook/CardBook'
import './style.css'

function Saved() {
    const svdBooks = localStorage.getItem('svdBooks')
    const savedBooks = JSON.parse(svdBooks)

    return (
        <div className='saved'>
            <h2>Aqui estão seus livros salvos!</h2>
            <span className="saved__list">
            {
                        savedBooks != null ?

                        savedBooks.map(book => {
                                return (

                                    <CardBook
                                        key={book.id}
                                        id={book.id}
                                        cover={book.cover}
                                        title={book.title}
                                        authors={book.authors}
                                        publisher={book.publisher}
                                    />
                                )


                            })

                            : null


                    }
            </span>
        </div>
    )
}

export default Saved