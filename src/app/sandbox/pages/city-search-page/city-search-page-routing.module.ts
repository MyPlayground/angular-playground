import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitySearchPageComponent } from './city-search-page.component';

const routes: Routes = [
  {
    path: '',
    component: CitySearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitySearchPageRoutingModule {}
