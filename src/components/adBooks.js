import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookss';
import '../CSSmodules/form.css';

const Addbook = () => {
  const dispatchBook = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleBookForm = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '' && category.trim() !== '') {
      const payload = {
        id: uuidv4(), title, author, category,
      };
      dispatchBook(addBook(payload));
      setTitle('');
      setAuthor('');
      setCategory('');
    } else {
      setTitle('');
      setAuthor('');
      setCategory('');
      const error = document.getElementById('error');
      error.innerHTML = 'Enter a title and author';
      setTimeout(() => {
        error.innerHTML = '';
      }, 1000);
    }
  };

  return (
    <div className="genaral-contain">
      <h2 className="heading">ADD NEW BOOK</h2>
      <form onSubmit={handleBookForm} className="list-form">
        <input type="text" className="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title Here" />
        <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author Name Here" />
        <input type="text" className="categoryEl" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category Name Here" />
        <button className="button-sub" type="submit">Add Book</button>
      </form>
      <span id="error" />
    </div>
  );
};
export default Addbook;
