import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header/Header'
import Search from '../pages/Search'
import Saved from '../pages/Saved'
import Book from '../pages/Book'
import Footer from '../components/Footer/Footer'

function AppRouter(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/buscar' element={<Search/>}/>
                <Route path='/salvos' element={<Saved/>}/>
                <Route path='/livro/:id' element={<Book/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter