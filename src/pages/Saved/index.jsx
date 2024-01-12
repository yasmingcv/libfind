import CardBook from '../../components/CardBook/CardBook'
import './style.css'

function Saved(){
    return(
        <div className='saved'>
            <h2>Aqui estão seus livros salvos!</h2>
            <span className="saved__list">
                <CardBook/>
                <CardBook/>
                <CardBook/>
                <CardBook/>
                <CardBook/>
                <CardBook/>
            </span>
        </div>
    )
}

export default Saved