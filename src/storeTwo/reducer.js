// import { data } from "react-router-dom";

const getLS = () => {
  try {
    const data = localStorage.getItem("carzina");
    if (!data) return [];
    return JSON.parse(data);
  } catch (e) {
    console.log("ERROR LS", e);
    return [];
  }
};

const setLS = (val) => {
  localStorage.setItem("carzina", JSON.stringify(val));
};

const initialState = getLS();

const carzinaReducer = (state = initialState, action) => {
  let obj;
  switch (action.type) {
    case "ADD_CARZINA":
      let quen = state.find((el) => el.id === action.payload.id);
      if (quen !== undefined) {
        obj = state.map((el, idx) =>
          // idx === quen ? { ...el, quentity: el.quentity + 1 } : el
          el.id === quen.id ? { ...el, quentity: el.quentity + 1 } : el
        );
      } else {
        obj = [...state, { ...action.payload, quentity: 1 }];
      }
      break;
    case "DELETE_CARZINA":
      obj = state.filter((el) => el.id !== action.payload);
      break;
    case "CLEAR_CARZINA":
      obj = []
      break;
    case "CHANGE_QUENTITY":
      // let val=
      obj = state.map((el) =>
        el.id === action.payload.id
          ? { ...el, quentity: action.payload.value }
          : el
      );
      break;
    default:
      return state;
  }
  setLS(obj);
  return obj;
};

export default carzinaReducer;
