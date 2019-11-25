import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromCitySearchPageStore from './city-search-page-store.reducer';

export const citySearchPageFeatureKey = 'citySearchPage';

export interface State {
  [fromCitySearchPageStore.citySearchPageStoreFeatureKey]: fromCitySearchPageStore.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCitySearchPageStore.citySearchPageStoreFeatureKey]: fromCitySearchPageStore.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
