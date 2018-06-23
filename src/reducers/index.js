export default (state = [], {
  type,
  payload
}) => {
  switch (type) {
    case 'ADD_TODO':
      return [...state, payload];
    case 'REMOVE_TODO':
      return state.filter(task => task.id !== payload);
    default:
      return state;
  }
}