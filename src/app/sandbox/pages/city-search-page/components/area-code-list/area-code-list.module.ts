import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AreaCodeListComponent } from './area-code-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AreaCodeListComponent],
  imports: [CommonModule, SharedModule],
  exports: [AreaCodeListComponent]
})
export class AreaCodeListModule {}
