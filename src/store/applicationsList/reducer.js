import {
  APPLICATIONS_LOADING,
  APPLICATIONS_DONE_LOADING,
  LOG_OUT,
} from "./actions";

const initialState = {
  loading: false,
  app: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case APPLICATIONS_LOADING:
      return { ...state, loading: true };

    case APPLICATIONS_DONE_LOADING:
      return { ...state, loading: false, app: action.payload };
    case LOG_OUT:
      return { ...initialState };

    default:
      return state;
  }
}
