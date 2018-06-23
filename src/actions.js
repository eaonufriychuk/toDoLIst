export const addToDO = (toDo) => ({
  type: 'ADD_TODO',
  payload: toDo
});

export const removeToDO = (toDoId) => ({
  type: 'REMOVE_TODO',
  payload: toDoId
});