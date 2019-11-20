import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CustomListComponent } from './custom-list.component';
import { DefaultModule } from '../../default.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [CustomListComponent],
  imports: [DefaultModule, MaterialModule],
  exports: [CustomListComponent]
})
export class CustomListModule {}
