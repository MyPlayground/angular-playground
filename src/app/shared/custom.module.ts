import { NgModule } from '@angular/core';
import { CustomListModule } from './parts/custom-list/custom-list.module';

const modules = [CustomListModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class CustomModule {}
