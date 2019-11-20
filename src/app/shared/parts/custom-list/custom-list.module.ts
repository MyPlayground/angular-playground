import { NgModule } from '@angular/core';
import { DefaultModule } from '../../default.module';
import { MaterialModule } from '../../material.module';
import { CustomListComponent } from './custom-list.component';

@NgModule({
  declarations: [CustomListComponent],
  imports: [DefaultModule, MaterialModule],
  exports: [CustomListComponent]
})
export class CustomListModule {}
