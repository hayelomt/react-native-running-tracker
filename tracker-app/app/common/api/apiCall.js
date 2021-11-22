const { logError } = require('../utils/logger');

export default async (apiCallCb, { onSuccess, onValidationError, onError }) => {
  // console.log('Make Api call');
  try {
    const response = await apiCallCb();
    onSuccess(response.data);
  } catch (err) {
    const defaultMessage = 'Something went wrong, try again';
    if (err && err.response) {
      if (
        err.response.status === 400 &&
        err.response.data &&
        onValidationError
      ) {
        const { errors } = err.response.data;
        onValidationError(errors);
      } else if (err.response && err.response.data && onError) {
        onError(err.response.message || defaultMessage);
      }
    } else if (onError) {
      onError(defaultMessage);
    }
    logError(
      'Api Error',
      err.message || (err.response ? err.response.message : err)
    );
  }
};
