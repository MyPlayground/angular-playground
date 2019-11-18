import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CustomListComponent } from './custom-list.component';

@NgModule({
  declarations: [CustomListComponent],
  imports: [CommonModule, MatDividerModule, MatListModule],
  exports: [CustomListComponent]
})
export class CustomListModule {}
