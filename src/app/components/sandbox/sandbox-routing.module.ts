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
    loadChildren: () => import('./pages/city-search-page/city-search-page.module').then(m => m.CitySearchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule {}
