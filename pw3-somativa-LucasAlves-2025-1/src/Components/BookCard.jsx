import style from "./BookCard.module.css";

function BookCard({ titulo, autor, imagem, livro }) {
  return (
    <div className={style.card}>
      <img src={imagem} />
      <div className={style.titulo}>
        <h3>{titulo}</h3>
        <p>{autor}</p>
      </div>
    </div>
  );
}

export default BookCard;
