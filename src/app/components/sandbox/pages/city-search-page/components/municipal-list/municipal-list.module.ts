import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MunicipalListComponent } from './municipal-list.component';

@NgModule({
  declarations: [MunicipalListComponent],
  imports: [SharedModule],
  exports: [MunicipalListComponent]
})
export class MunicipalListModule {}
