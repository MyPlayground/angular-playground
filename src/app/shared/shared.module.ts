import { NgModule } from '@angular/core';
import { CustomModule } from './custom.module';
import { DefaultModule } from './default.module';
import { MaterialModule } from './material.module';

const modules = [DefaultModule, MaterialModule, CustomModule];

/**
 * @see https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/
 */
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule {}
