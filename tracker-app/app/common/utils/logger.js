export const logIt = (...data) => {
  console.log(':>', ...data);
};

export const logError = (...data) => {
  console.error('::>ERR', ...data);
};
