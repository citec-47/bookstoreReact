import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './bookss';
import { fetchBooks } from '../redux/books/bookss';
import '../CSSmodules/bookitem.css';

const Bookitems = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.Books.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div>
      <ul className="bookList">
        {
        books && books.map((book) => (
          <li key={book.id}>
            <Book items={book} />
          </li>
        ))
        }

      </ul>
    </div>
  );
};

export default Bookitems;
