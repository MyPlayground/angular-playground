import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'city-search',
    pathMatch: 'full'
  },
  {
    path: 'city-search',
    loadChildren: './pages/city-search-page/city-search-page.module#CitySearchPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule {}
