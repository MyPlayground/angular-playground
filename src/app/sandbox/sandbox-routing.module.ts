import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitySearchPageComponent } from './city-search-page/city-search-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'city-search',
    pathMatch: 'full'
  },
  {
    path: 'city-search',
    component: CitySearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule {}
