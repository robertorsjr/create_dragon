import AsyncStorage from '@react-native-async-storage/async-storage';

const Types = {
  REQUEST: 'Login/REQUEST',
  REQUEST_SUCCESS: 'Login/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'Login/REQUEST_FAILURE',
};

export const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false,
    },
  }),

  requestSuccess: response => ({
    type: Types.REQUEST_SUCCESS,
    data: {
      loading: false,
      data: response,
    },
  }),

  requestFailure: () => ({
    type: Types.REQUEST_FAILURE,
    data: {
      loading: false,
      error: true,
    },
  }),
};

export function checkIsLogged() {
  return async dispatch => {
    dispatch(Creators.request());
    const isLogged = await AsyncStorage.getItem('logged');
    if (isLogged) {
      dispatch(Creators.requestSuccess(true));
    } else {
      dispatch(Creators.requestSuccess(false));
    }
  };
}

export function signOut() {
  return async dispatch => {
    dispatch(Creators.request());
    await AsyncStorage.clear();
    dispatch(Creators.requestSuccess(false));
  };
}

export function requestLogin(data) {
  return async dispatch => {
    dispatch(Creators.request());
    const { login, password } = data;
    try {
      if (login === 'admin' && password === 'admin') {
        await AsyncStorage.setItem('logged', 'true');
        dispatch(Creators.requestSuccess(true));
      }
    } catch (error) {
      dispatch(Creators.requestFailure());
    }
  };
}

const initialState = {
  loading: false,
  error: false,
  data: false,
};

export default function loginState(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case Types.REQUEST_SUCCESS: {
      return { ...state, ...data };
    }
    case Types.REQUEST_FAILURE:
    case Types.REQUEST: {
      return { ...state, ...data };
    }

    default: {
      return state;
    }
  }
}
