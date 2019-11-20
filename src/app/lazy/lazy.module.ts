import { NgModule } from '@angular/core';
import { LazyPageComponent } from '../lazy/lazy-page/lazy-page.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [LazyPageComponent],
  imports: [LazyRoutingModule]
})
export class LazyModule {}
