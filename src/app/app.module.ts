import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputPanelComponent } from './input-panel/input-panel.component';
import { DisplayPanelComponent } from './display-panel/display-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPanelComponent,
    DisplayPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
