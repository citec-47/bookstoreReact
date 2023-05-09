import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from './myButton';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handelSubmit = (e) => {
    const data = {
      title,
      author,
      id: uuidv4(),
    };
    e.preventDefault();
    dispatch(addBook(data));
  };
  return (
    <>
      <h2>Add a New Book</h2>
      <form onSubmit={handelSubmit}>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Book Title" />
        <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} id="author" placeholder="Book Author" />
        <Button className="add-book" type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
