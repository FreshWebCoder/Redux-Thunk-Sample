import { actionTypes } from '../actions/AppActions';

export const appInitialState = {
  isLoading: false,
  elements: [],
  hasMore: true,
};

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case actionTypes.ADD_ELEMENTS:
      return {
        isLoading: false,
        elements: [
          ...state.elements,
          ...action.payload,
        ]
      };
    case actionTypes.HAS_MORE:
      return {
        ...state,
        hasMore: action.payload
      }
    default:
      return state;
  }
};

export default appReducer;
