import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

export interface State {}

export const reducers: ActionReducerMap<State> = {};

export function logger(reducer: ActionReducer<State>) {
  return (state: State, action: Action) => {
    const newState = reducer(state, action);
    console.log('action', action);
    console.log('state', newState);
    return newState;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
