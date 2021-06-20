import { updateDragon } from '../../services/dragon';
import { requestListDragons } from './list';

const Types = {
  REQUEST: 'updateDragon/REQUEST',
  REQUEST_SUCCESS: 'updateDragon/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'updateDragon/REQUEST_FAILURE',
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

export function requestUpdateDragon(id, data) {
  return async dispatch => {
    dispatch(Creators.request());
    try {
      const response = await updateDragon(id, data);
      dispatch(requestListDragons());
      dispatch(Creators.requestSuccess(response.data));
    } catch (error) {
      dispatch(Creators.requestFailure());
    }
  };
}

const initialState = {
  loading: true,
  error: false,
  data: {},
};

export default function updateDragonState(state = initialState, action) {
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
