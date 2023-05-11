import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './bookss';
import { fetchinBooks } from '../redux/books/bookss';
import '../CSSmodules/bookitem.css';

const BookItemses = () => {
  const dispatchBook = useDispatch();
  const books = useSelector((state) => state.Books.books);
  useEffect(() => {
    dispatchBook(fetchinBooks());
  }, [dispatchBook]);
  return (
    <div>
      <ul className="bookList">
        {
        books && books.map((book) => (
          <li key={book.id}>
            <Books items={book} />
          </li>
        ))
        }

      </ul>
    </div>
  );
};

export default BookItemses;
