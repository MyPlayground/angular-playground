import { createAction, props } from '@ngrx/store';

export const loadCitySearchPageStores = createAction(
  '[CitySearchPageStore] Load CitySearchPageStores'
);

export const loadCitySearchPageStoresSuccess = createAction(
  '[CitySearchPageStore] Load CitySearchPageStores Success',
  props<{ data: any }>()
);

export const loadCitySearchPageStoresFailure = createAction(
  '[CitySearchPageStore] Load CitySearchPageStores Failure',
  props<{ error: any }>()
);
