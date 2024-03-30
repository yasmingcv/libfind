import CardBook from '../../components/CardBook/CardBook'
import './style.css'

function Saved(){
    const svdBooks = localStorage.getItem('svdBooks')
    console.log(JSON.parse(svdBooks))

    return(
        <div className='saved'>
            <h2>Aqui estão seus livros salvos!</h2>
            <span className="saved__list">
                {svdBooks}
            </span>
        </div>
    )
}

export default Saved