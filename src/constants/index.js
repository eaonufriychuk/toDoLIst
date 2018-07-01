export const formatDate = (date) => {
  let d = new Date(date),
    month = `${d.getMonth() + 1}`,
    day = `${d.getDate()}`,
    year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

export const PRIORITY_LABEL = {
  0: '+2',
  1: '+1',
  2: '0',
  3: '-1',
};

export const CATEGORY_LABEL = {
  4: 'Do now',
  5: 'Do tomorrow',
  6: 'Do soon',
  7: 'Do when you get some extra time'
};