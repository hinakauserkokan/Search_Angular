import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { OtherfilterPipe } from './otherfilter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    FooditemsComponent,
    SearchfilterPipe,
    OtherfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
