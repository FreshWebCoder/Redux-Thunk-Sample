import axios from 'axios';

export const actionTypes = {
  IS_LOADING: 'IS_LOADING',
  ADD_ELEMENTS: 'ADD_ELEMENTS',
  HAS_MORE: 'HAS_MORE',
};

export function fetchElements(size) {
  return async (dispatch, getState) => {
    const { elements } = getState().app;
    dispatch({
      type: actionTypes.IS_LOADING,
      payload: true
    });

    return axios.get(
      "https://api.javascripttutorial.net/v1/quotes/",
      {
        params: {
          page: Math.ceil(elements.length / size) + 1,
          limit: size
        }
      }
    ).then(({ data }) => {
      dispatch({
        type: actionTypes.ADD_ELEMENTS,
        payload: data.data
      });

      dispatch({
        type: actionTypes.HAS_MORE,
        payload: elements.length + data.data.length < data.total
      });
    }).catch((err) => {
      console.error(err);
      dispatch({
        type: actionTypes.IS_LOADING,
        payload: false
      });
    });
  };
}
