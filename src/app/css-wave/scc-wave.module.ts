import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SccWaveComponent } from './scc-wave.component';
import { WavesRoutes } from './waves.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WavesRoutes,
    SharedModule
  ],
  declarations: [SccWaveComponent]
})
export class CssWaveModule { }
