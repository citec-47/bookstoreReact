import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Nav from './components/Nav';
import style from './BookPage.module.css';
import EachBook from './components/BookComponent/EACHBOOK';
import AddBook from './components/BookComponent/AdBook';
import { booksAPI } from './redux/books/books';

function BookStorePage() {
  const books = useSelector((state) => state.Books, shallowEqual);
  const dispatchBooks = useDispatch();
  useEffect(() => {
    dispatchBooks(booksAPI());
  }, []);
  return (
    <div style={{ border: 'solid 3px #e8e8e8', height: '100vh' }}>
      <Nav />
      <div className={style.body}>
        <div className={style.action}>
          {books.map((book) => (
            <EachBook
              topic={book.topic}
              author={book.author}
              title={book.title}
              key={book.item_id}
              id={book.item_id}
              category={book.category}

            />
          ))}

        </div>
      </div>
      <AddBook />
    </div>
  );
}

export default BookStorePage;
