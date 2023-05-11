const CHECKED_STATUS = 'bookstore/src/redux/categories/CHECK_STATUS';

const initialState = [];

const categoryRiducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECKED_STATUS,
});

export default categoryRiducer;
