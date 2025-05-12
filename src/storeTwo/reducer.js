const getLS = () => {
  const data = JSON.parse(localStorage.getItem("carzina")) || [];
  return data;
};
const setLS = (val) => {
  localStorage.setItem("carzina", JSON.stringify(val));
};

const initialState = getLS();

const carzinaReducer = (state = initialState, action) => {
  let obj;
  switch (action.type) {
    case "ADD_CARZINA":
        obj= [...state, action.payload];
      break;
    case "DELETE_CARZINA":
        obj= state.filter((el)=>el.id !== action.payload)
       break;
    default:
      return state;
  }
  setLS(obj);
  return obj;
};

export default carzinaReducer;
