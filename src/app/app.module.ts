import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmissionFormComponent } from './addmission-form/addmission-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddmissionFormComponent,
    EditFormComponent,
    DisplaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
