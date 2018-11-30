import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SliderRoutes } from './slider.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SliderRoutes,
    SharedModule
  ],
  declarations: [SliderComponent]
})
export class SliderModule { }
