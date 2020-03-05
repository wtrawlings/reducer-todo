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
  //I'm not sure what titleReducer is
  //I'm not sure what I'm missing here
  //staring at this is making me worse
  export const titleReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_TITLE":
        return { ...state, title: action.payload, editing: false };
      case "CHANGE_EDIT":
        return { ...state, editing: true };
        case "ADD_TODO":
          console.log()
          return [...state, {completed: false, id:Date.now, item: action.payload}];
          //this return is our add to the text
          //this was selected by the action type
      default:
        return state;
    }
  };
  