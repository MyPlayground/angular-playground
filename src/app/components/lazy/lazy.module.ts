import { NgModule } from '@angular/core';
import { LazyPageComponent } from '../lazy/lazy-page/lazy-page.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LazyPageComponent],
  imports: [LazyRoutingModule, SharedModule]
})
export class LazyModule {}
