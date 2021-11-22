exports.parseValidation = (errors) => {
  const valMessages = {};
  errors.forEach((error) => {
    valMessages[error.param] = error.msg;
  });

  return { errors: valMessages };
};
