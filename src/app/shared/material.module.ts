import { NgModule } from '@angular/core';
import { MatDividerModule, MatListModule, MatButtonModule } from '@angular/material';

const modules = [MatDividerModule, MatListModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
