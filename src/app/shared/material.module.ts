import { NgModule } from '@angular/core';
import { MatDividerModule, MatListModule } from '@angular/material';

const modules = [MatDividerModule, MatListModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
