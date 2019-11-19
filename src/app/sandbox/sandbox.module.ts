import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CitySearchPageModule } from './pages/city-search-page/city-search-page.module';
import { SandboxRoutingModule } from './sandbox-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SandboxRoutingModule, CitySearchPageModule]
})
export class SandboxModule {}
