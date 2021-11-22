import createDataContext from '../../common/containers/createDataContext';
import trackerApi from '../../common/api/tracker';
import apiCall from '../../common/api/apiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../common/constants';

const actionTypes = {
  clearLoading: 'clear_loading',
  clearSignInError: 'clear_signin_error',
  clearSignUpError: 'clear_signup_error',
  setCheckingLocal: 'set_checking_local',
  setSignInError: 'set_sign_in_error',
  setSignUpError: 'set_signup_error',
  signIn: 'sign_in',
  signOut: 'sign_out',
  startSignIn: 'start_sign_in',
  startSignUp: 'start_signup_error',
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.clearLoading:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.clearSignInError:
      return {
        ...state,
        signInErrors: { email: '', password: '' },
      };
    case actionTypes.clearSignUpError:
      return {
        ...state,
        signUpErrors: { name: '', email: '', password: '' },
      };
    case actionTypes.setCheckingLocal:
      return {
        ...state,
        checkingLocal: payload,
      };
    case actionTypes.setSignInError:
      return { ...state, signInErrors: payload };
    case actionTypes.setSignUpError:
      return { ...state, signUpErrors: payload };
    case actionTypes.signOut:
      return { ...state, isSignedIn: false };
    case actionTypes.signIn:
      return { ...state, token: payload, isSignedIn: true };
    case actionTypes.startSignIn:
      return {
        ...state,
        loading: true,
        signInErrors: { email: '', password: '' },
      };
    case actionTypes.startSignUp:
      return {
        ...state,
        loading: true,
        signUpErrors: { name: '', email: '', password: '' },
      };
    default:
      return state;
  }
};

const signUp = (dispatch) => async (data) => {
  dispatch({ type: actionTypes.startSignUp });
  await apiCall(() => trackerApi.post('/auth/sign-up', data), {
    onSuccess: async (data) => {
      const { token, user } = data;
      await AsyncStorage.setItem(constants.storageKeys.token, token);
      await AsyncStorage.setItem(constants.storageKeys.userName, user.name);
      dispatch({ type: actionTypes.signIn, payload: token });
    },
    onValidationError: (errors) => {
      dispatch({ type: actionTypes.setSignUpError, payload: errors });
    },
  });
  dispatch({ type: actionTypes.clearLoading });
};

const signIn = (dispatch) => async (data) => {
  dispatch({ type: actionTypes.startSignIn });
  await apiCall(() => trackerApi.post('/auth/login', data), {
    onSuccess: async (data) => {
      const { token, user } = data;
      await AsyncStorage.setItem(constants.storageKeys.token, token);
      await AsyncStorage.setItem(constants.storageKeys.userName, user.name);
      dispatch({ type: actionTypes.signIn, payload: token });
    },
    onValidationError: (errors) => {
      dispatch({ type: actionTypes.setSignInError, payload: errors });
    },
  });
  dispatch({ type: actionTypes.clearLoading });
};

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem(constants.storageKeys.token);
  await AsyncStorage.removeItem(constants.storageKeys.userName);
  dispatch({ type: actionTypes.signOut });
};

const clearSignIn = (dispatch) => () =>
  dispatch({ type: actionTypes.clearSignInError });

const clearSignUp = (dispatch) => () =>
  dispatch({ type: actionTypes.clearSignUpError });

const tryLocalSignIn = (dispatch) => async () => {
  dispatch({ type: actionTypes.setCheckingLocal, payload: true });
  // await new Promise((r) => setTimeout(r, 2000));
  const token = await AsyncStorage.getItem(constants.storageKeys.token);
  if (token) {
    dispatch({ type: actionTypes.signIn, payload: token });
  }
  dispatch({ type: actionTypes.setCheckingLocal, payload: false });
};

const actions = {
  signUp,
  signIn,
  signOut,
  clearSignIn,
  clearSignUp,
  tryLocalSignIn,
};

const initialState = {
  isSignedIn: false,
  signUpErrors: { name: '', email: '', password: '' },
  signInErrors: { email: '', password: '' },
  loading: false,
  token: null,
  checkingLocal: true,
};

export const { Provider: AuthProvider, Context: AuthContext } =
  createDataContext(authReducer, actions, initialState);
