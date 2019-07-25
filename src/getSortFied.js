const getSortFied = (todos, sortField) => {
  if (sortField === 'All') {
    console.log(sortField);
    return todos;
  }

  const callBackSort = {
    Active: a => !a.completed,
    Completed: a => a.completed,
  };

  const callBack = callBackSort[sortField];

  return todos.filter(callBack);
};

export default getSortFied;
