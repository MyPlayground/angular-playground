import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AreaCodeListComponent } from './area-code-list.component';

@NgModule({
  declarations: [AreaCodeListComponent],
  imports: [SharedModule],
  exports: [AreaCodeListComponent]
})
export class AreaCodeListModule {}
