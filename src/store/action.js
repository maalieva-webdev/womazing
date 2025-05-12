export const addTodo = (value) => ({
  type: "ADD_TODO",
  payload: {
    id: Date.now(),
    completed: false,
    value
  }
})

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id
})

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id
})