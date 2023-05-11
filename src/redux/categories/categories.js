// Actions
const Actions = [
  { CHECK: 'bookstore/categories/CHECK' },
];

// Action Creator

const reducer = (state = [], action) => {
  switch (action.type) {
    case Actions[0].CHECK:
      return 'Under Construction';
    default:
      return state;
  }
};

// Creator
export const Category = () => ({ type: Actions[0].CHECK });

export default reducer;
