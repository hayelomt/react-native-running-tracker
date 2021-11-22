import createDataContext from '../../common/containers/createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const actions = {};

const initialState = { isSignedIn: false };

export const { Provider: AuthProvider, Context: AuthContext } =
  createDataContext(authReducer, actions, initialState);
