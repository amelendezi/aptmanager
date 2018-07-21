import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { OverviewComponent } from './overview/overview.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { BuildingComponent } from './building/building.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    OverviewComponent,
    ApartmentsComponent,
    BuildingComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
