import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyingPlaneComponent } from './flying-plane.component';
import { FlyingPlaneRoutes } from './flying.routing';

@NgModule({
  imports: [
    CommonModule,
    FlyingPlaneRoutes
  ],
  declarations: [FlyingPlaneComponent]
})
export class FlyingPlaneModule { }
