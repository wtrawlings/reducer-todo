export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Figure out Redux',
    completed: false,
    id: 12341341234
  },
  {
    item: 'Get Good...',
    completed: false,
    id: 6875678578
  }
];
  
  export const titleReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_TITLE":
        return { ...state, title: action.payload, editing: false };
      case "CHANGE_EDIT":
        return { ...state, editing: true };
      default:
        return state;
    }
  };
  