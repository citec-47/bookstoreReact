import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './books';
import { fetchMyBooks } from '../redux/books/books_API';

const Bookitems = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.Books.books);
  useEffect(() => {
    dispatch(fetchMyBooks());
  }, [dispatch]);
  return (
    <div>
      <ul>
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
