import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  NavModule
} from './nav/nav.module';
import {
  HeaderModule
} from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderModule,
    NavModule,
  ],
  declarations: []
})
export class CoreModule { }
