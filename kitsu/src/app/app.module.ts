import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    SlideComponent,
    BannerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
