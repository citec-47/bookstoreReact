import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../../redux/books/books';
import styles from './AddBook.module.css';

function AddMyBookForm() {
  const dispatchBook = useDispatch();
  const [singleBook, setSingleBook] = useState({
    title: '',
    category: '',
    author: '',
    item_id: '',
  });

  // Changing state
  const changeFunctio = (e) => {
    const [name, value] = [e.target.name, e.target.value];
    if (value.trim() === '') e.target.value = '';

    setSingleBook((previous) => ({
      ...previous,
      [name]: value.trim(),
    }));
  };

  // submit
  const submitMyForm = (e) => {
    e.preventDefault();
    dispatchBook(AddBook({ ...singleBook, item_id: uuidv4() }));
    document.querySelector('.form-input').reset();
  };
  return (
    <div className={styles.containers}>
      <h1>ADD NEW BOOK</h1>
      <form name="addBook" onSubmit={submitMyForm} className="form-input">
        <input type="text" name="title" placeholder="Book title" onChange={changeFunctio} required />
        <input type="text" name="author" placeholder="Author name" onChange={changeFunctio} required />
        <select name="category" onChange={changeFunctio} required>
          <option value="" defaultValue>category</option>
          <option value="Action">Commercial Subjects</option>
          <option value="Science Fiction">Art Subjects</option>
          <option value="Economy">Science Subjects</option>
        </select>
        <input className={styles.butt} type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}

export default AddMyBookForm;
