import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCitySearchPage from './';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCitySearchPage.citySearchPageFeatureKey, fromCitySearchPage.reducers, {
      metaReducers: fromCitySearchPage.metaReducers
    })
  ]
})
export class CitySearchPageStoreModule {}
