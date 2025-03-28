import { BrowserRouter, Routes, Route } from 'react-router-dom'

import style from './App.module.css'

import Container from './components/layout/Container'

/* IMPORTS DOS COMPONENTES DE PÁGINAS */
import Home from './components/pages/Home/Home.jsx'
import CreateBook from './components/pages/CreateBook/CreateBook.jsx'
import ListBook from './components/pages/ListBook/ListBook.jsx'

/* IMPORTAÇÃO DO NAVBAR */
import NavBar from './components/layout/NavBar'

function App() {

  return (    
      <div className={style.body}>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                <Route path='/newBook' element={<CreateBook />} />
                <Route path='/listBook' element={<ListBook />} />

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>
  )
}

export default App
