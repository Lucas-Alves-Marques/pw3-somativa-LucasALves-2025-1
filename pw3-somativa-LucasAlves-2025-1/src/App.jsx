import style from "./App.module.css";
import BookCard from "./Components/BookCard";
import asCavernasDeAco from "./Img/cavernas_aco.jpg";
import ladraoDeRaios from "./Img/Ladrao_de_Raios.jpg";
import oSolDesvelado from "./Img/sol_desvelado.jpg";
import marDeMonstros from "./Img/O_Mar_de_Monstros.jpg";

function App() {
  return (
    <>
      <div className={style.body}>
        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        <div className={style.cards}>
          <div className={style.card}>
            <BookCard
              titulo="As Cavernas de Aço"
              autor="Isaac Azimov"
              imagem={asCavernasDeAco}
            />

            <BookCard
              titulo="Parcy Jackson - O ladrão de Raios"
              autor="Rick Riordan"
              imagem={ladraoDeRaios}
            />

            <BookCard
              titulo="O sol Desvelado"
              autor="Isaac Azimov"
              imagem={oSolDesvelado}
            />

            <BookCard
              titulo="Parcy Jackson - O Mar de Monstros"
              autor="Rick Riordan"
              imagem={marDeMonstros}
            />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
