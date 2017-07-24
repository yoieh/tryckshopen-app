import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollSpyModule, ScrollSpyService } from 'ngx-scrollspy';
import { Parallax, ParallaxConfig } from 'ng2-parallax/commonjs';
import { SmoothScrollToDirective, SmoothScrollDirective } from 'ng2-smooth-scroll';


import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    Parallax,
    SmoothScrollToDirective,
    SmoothScrollDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ScrollSpyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
