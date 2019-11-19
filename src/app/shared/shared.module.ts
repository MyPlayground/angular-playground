import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomListModule } from './parts/custom-list/custom-list.module';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, CustomListModule];

/**
 * @see https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/
 */
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule {}
