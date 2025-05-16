
export const addCarzina=(val)=>({
    type:'ADD_CARZINA',
    payload: val,
})
export const deleteCarzina=(id)=>({
    type:'DELETE_CARZINA',
    payload: id
})
export const changeQuentity=(value,id)=>({
    type:'CHANGE_QUENTITY',
    payload: {value,id}
})