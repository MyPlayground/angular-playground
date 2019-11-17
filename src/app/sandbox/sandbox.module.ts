import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { CitySearchPageComponent } from '../sandbox/city-search-page/city-search-page.component';

@NgModule({
  declarations: [CitySearchPageComponent],
  imports: [CommonModule, SandboxRoutingModule]
})
export class SandboxModule {}
