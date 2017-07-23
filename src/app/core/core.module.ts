import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NavModule } from './nav/nav.module';
import { HeaderModule } from './header/header.module';

// import { HeaderComponent } from './header/header.component';
// import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot()
  ],
  exports: [
    // HeaderComponent,
    // NavComponent,
  ],
  declarations: [
    // HeaderComponent,
    // NavComponent
  ]
})
export class CoreModule {
}
