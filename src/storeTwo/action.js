
export const addCarzina=(val,valQuen)=>({
    type:'ADD_CARZINA',
    payload: {val,valQuen}
})
export const deleteCarzina=(id)=>({
    type:'DELETE_CARZINA',
    payload: id
})
export const changeQuentity=(value,id)=>({
    type:'CHANGE_QUENTITY',
    payload: {value,id}
})
export const clearCarzina=()=>({
    type:'CLEAR_CARZINA'
})