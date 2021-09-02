import { createSelector } from 'reselect';

export function getApp(state) {
  return state.app;
}

export const getIsLoading = createSelector(
  getApp,
  (app) => app.isLoading,
);

export const getElements = createSelector(
  getApp,
  (app) => app.elements,
);

export const getHasMore = createSelector(
  getApp,
  (app) => app.hasMore,
);
