import React, { useState } from "react";
import style from "./Createbooks.module.css";

import Input from "../../Form/Input/Input";
import Select from "../../Form/Select/Select";
import Button from "../../Form/Button/Button";

const CreateBook = () => {
  const [book, setBook] = useState([]);

  // captura de dados do input

  const handleBook = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });

    console.log(book);
  };

  // captura de dados do select

  const handleChangeCategory = (e) => {
    setBook({
      ...book,
      category: e.target.options[e.target.selectedIndex].text,
    });

    console.log(book);
  };

  // envio dos dados para a API

  const submit = (e) => {
    e.preventDefault();

    console.log(book);
  };

  return (
    <section className={style.create_book_container}>
      <h1>CADASTRO DE LIVROS</h1>

      <form onSubmit={submit}>
        <Input
          type="text"
          name="txt_livro"
          id="txt_livro"
          placeholder="Digite o nome do livro"
          action={handleBook}
        />

        <Input
          type="text"
          name="txt_autor"
          id="txt_autor"
          placeholder="Digite o nome do autor"
          action={handleBook}
        />

        <Input
          type="text"
          name="txt_descricao"
          id="txt_descricao"
          placeholder="Digite a descrição do livro"
          action={handleBook}
        />

        <Select
          name="slc_categoria"
          id="slc_categoria"
          text="Categoria do Livro"
          handlerChange={handleChangeCategory}
        />

        <Button label="Cadastrar Livro" />
      </form>
    </section>
  );
};

export default CreateBook;
