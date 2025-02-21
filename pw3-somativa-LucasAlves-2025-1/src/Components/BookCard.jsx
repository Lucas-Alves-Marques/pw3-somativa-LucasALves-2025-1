import style from "./BookCard.module.css";
import Button from "./Button";

function BookCard({ titulo, autor, imagem, livro }) {
  return (
    <div className={style.card}>
      <img src={imagem} />
      <div className={style.titulo}>
        <h3>{titulo}</h3>
        <p>{autor}</p>
        <Button label={'DETALHE'}/> 
      </div>
    </div>
  );
  
}

export default BookCard;
