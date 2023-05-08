import React from 'react';

function myForm() {
  return (
    <>
      <h2>Add a New Book</h2>
      <form action="" method="">
        <input type="text" name="title" id="title" placeholder="Book Title" />
        <input type="text" name="author" id="author" placeholder="Book Author" />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default myForm;
