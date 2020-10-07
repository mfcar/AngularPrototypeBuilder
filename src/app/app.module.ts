import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PropertiesBarComponent } from './properties-bar/properties-bar.component';
import { MainCanvasComponent } from './main-canvas/main-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PropertiesBarComponent,
    MainCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
