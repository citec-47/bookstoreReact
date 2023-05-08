import React from 'react';
import PropTypes from 'prop-types';

function myBook({ id, title, author }) {
  return (
    <>
      <div>
        <ul>

          <li id={id}>
            <h4>
              Title :
              {title}
            </h4>
            <p>
              Author :
              {author}
            </p>
            <button type="button">Remove</button>
          </li>

        </ul>
      </div>

    </>
  );
}
myBook.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default myBook;
