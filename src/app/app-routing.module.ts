import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./components/lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'sandbox',
    loadChildren: () => import('./components/sandbox/sandbox.module').then(m => m.SandboxModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
