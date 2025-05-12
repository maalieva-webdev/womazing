const loadFromLocalstorage = () => {
  const data = JSON.parse(localStorage.getItem("todos")) || [];
  return data;
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state));
};

const initialState = loadFromLocalstorage();

const todoReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_TODO":
      newState = [...state, action.payload];
      break;
    case "TOGGLE_TODO": 
      newState = state.map((todo) => todo.id == action.payload ? {...todo, completed: !todo.completed} : todo
       )
      break
    case "DELETE_TODO":
      newState = state.filter((todo) => todo.id !== action.payload )
      break
    default:
      return state
  }

  saveToLocalStorage(newState)
  return newState
};

export default todoReducer;