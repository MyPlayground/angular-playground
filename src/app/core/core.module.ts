import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CitySearchService } from './services/city-search.service';

@NgModule({
  imports: [],
  providers: [CitySearchService],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
