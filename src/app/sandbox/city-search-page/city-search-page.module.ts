import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CitySearchPageRoutingModule } from './city-search-page-routing.module';
import { CitySearchPageComponent } from './city-search-page.component';

/**
 * @see http://www.land.mlit.go.jp/webland/api.html
 */
@NgModule({
  declarations: [CitySearchPageComponent],
  imports: [CommonModule, CitySearchPageRoutingModule, SharedModule],
  exports: [CitySearchPageComponent]
})
export class CitySearchPageModule {}
