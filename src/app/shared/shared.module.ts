import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomListModule } from '../shared/components/custom-list/custom-list.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CustomListModule]
})
export class SharedModule {}
