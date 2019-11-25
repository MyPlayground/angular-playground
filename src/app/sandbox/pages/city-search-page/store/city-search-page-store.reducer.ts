import { Action, createReducer, on } from '@ngrx/store';


export const citySearchPageStoreFeatureKey = 'citySearchPageStore';

export interface State {

}

export const initialState: State = {

};

const citySearchPageStoreReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return citySearchPageStoreReducer(state, action);
}
