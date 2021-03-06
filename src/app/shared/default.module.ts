import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class DefaultModule {}
