import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent,MobileNavComponent],
  exports:[SharedComponent,MobileNavComponent]
})
export class SharedModule { }
