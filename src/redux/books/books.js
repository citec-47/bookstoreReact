import axios from 'axios';
import { deleteBook, bookEndPoint } from '../../components/bookAPI';

// Actions
const Actions = {
  ADD: 'bookstore/book/ADD',
  REMOVE: 'bookstore/book/REMOVE',
  LOAD: 'bookstore/book/LOAD',
};
// state initialized as array

const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  const { payLoad } = action;
  switch (action.type) {
    case Actions.ADD:
      return [...state, payLoad.book];

    case Actions.LOAD:
      return [...payLoad];

    case Actions.REMOVE:
      return state.filter((book) => book.item_id !== payLoad.id);

    default:
      return state;
  }
};

// The Action   Creators
export const booksAPI = () => async (dispatch) => {
  const response = await axios.get(bookEndPoint());
  if (response.status === 200) {
    const payLoad = Object.keys(response.data).map((valu) => ({
      item_id: valu,
      ...response.data[valu][0],
    }));

    dispatch({
      type: Actions.LOAD,
      payLoad,
    });
  }
};

export const AddBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post(bookEndPoint(), book);
    if (response.status === 201) {
      return dispatch({
        type: Actions.ADD,
        payLoad: { book },
      });
    }

    throw new Error();
  } catch (error) {
    return 'Book save was unsuccessful';
  }
};

export const RemoveBook = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(deleteBook(id));
    if (response.status === 201) {
      return dispatch({
        type: Actions.REMOVE,
        payLoad: { id },
      });
    }
    throw new Error();
  } catch (error) {
    return 'Book not deleted';
  }
};

export default reducer;
