import React, { useState } from 'react';
import Book from './myBook';
import Form from './BookForm';

function BookList() {
  const [myBooks] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      author: 'Ndonyi',
    },
    {
      id: 2,
      title: 'Develop website and add content',
      author: 'Maurice',
    },
    {
      id: 3,
      title: 'Deploy to live server',
      author: 'djam',
    },
  ]);

  return (
    <>
      {myBooks.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </>
  );
}

export default BookList;
