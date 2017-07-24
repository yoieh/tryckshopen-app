import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
        CollapseModule.forRoot()
  ],
  exports: [ NavComponent ],
  declarations: [ NavComponent ]
})
export class NavModule { }
