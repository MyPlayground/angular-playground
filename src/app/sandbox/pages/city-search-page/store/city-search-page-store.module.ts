import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromCitySearchPage from './';
import { CitySearchPageStoreEffects } from './city-search-page-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCitySearchPage.citySearchPageFeatureKey, fromCitySearchPage.reducers, {
      metaReducers: fromCitySearchPage.metaReducers
    }),
    EffectsModule.forFeature([CitySearchPageStoreEffects])
  ]
})
export class CitySearchPageStoreModule {}
