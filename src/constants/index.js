export const formatDate = (date) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

export const priorities = ['+2', '+1', '0', '-1'];

export const categories = ['Do now', 'Do tomorrow', 'Do soon', 'Do when you get some extra time'];

export const tableTitles = ['Task', 'Priority', 'Category', 'Date', ''];
