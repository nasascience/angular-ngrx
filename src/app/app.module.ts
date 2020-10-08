import { BrowserModule } from '@angular/platform-browser';
// Modules
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms'

// Components
import { AppComponent } from './app.component';

//Other
import { effects, reducers } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({}),
    HttpClientModule,
    EffectsModule.forRoot(effects),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
