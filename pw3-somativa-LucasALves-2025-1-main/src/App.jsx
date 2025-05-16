import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container'

/* IMPORTS DOS COMPONENTES DE PÁGINAS */
import Home from './Components/Pages/Home/Home.jsx'
import CreateBook from './Components/Pages/CreateBook/CreateBook.jsx'
import ListBook from './Components/Pages/ListBook/ListBook.jsx'
import DetailBook from './Components/Pages/Details/DetailBook.jsx'

/* IMPORTAÇÃO DO NAVBAR */
import NavBar from './components/layout/NavBar'

function App() {

  return (
    <div>

      <BrowserRouter>

        <Container>

          <Routes>

            <Route path='/' element={<NavBar />}>

              <Route path='/' element={<Home />} />
              <Route path='/newBook' element={<CreateBook />} />
              <Route path='/listBook' element={<ListBook />} />
              <Route path='/detailBook/:cod_livro' element={<DetailBook />} />

            </Route>

          </Routes>

        </Container>

      </BrowserRouter>

    </div>
  )
}

export default App
