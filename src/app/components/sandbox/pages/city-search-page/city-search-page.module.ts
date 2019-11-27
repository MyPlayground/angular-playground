import { NgModule } from '@angular/core';
import { CitySearchPageRoutingModule } from './city-search-page-routing.module';
import { CitySearchPageComponent } from './city-search-page.component';
import { CitySearchPageService } from './city-search-page.service';
import { AreaCodeListModule } from './components/area-code-list/area-code-list.module';

/**
 * @see http://www.land.mlit.go.jp/webland/api.html
 */
@NgModule({
  declarations: [CitySearchPageComponent],
  imports: [CitySearchPageRoutingModule, AreaCodeListModule],
  exports: [CitySearchPageComponent],
  providers: [CitySearchPageService]
})
export class CitySearchPageModule {}
