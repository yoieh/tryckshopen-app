import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ NavComponent ],
  declarations: [ NavComponent ]
})
export class NavModule { }
