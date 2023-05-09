import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function BookList() {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}

        />
      ))}
      <Form />
    </>
  );
}

export default BookList;
