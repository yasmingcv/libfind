import CardBook from '../../components/CardBook/CardBook'
import './style.css'

function Search() {
    return (
        <div className="search">
            <h2>Busque por títulos ou autores!</h2>

            <input type="search" />

            <div className="book__list"></div>

            <span className='search__results'>
                <CardBook />
                <CardBook />
                <CardBook />
                <CardBook />
                <CardBook />
                
            </span>

        </div>
    )
}

export default Search