import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { OverviewComponent } from './overview/overview.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { BuildingComponent } from './building/building.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { PersonListComponent } from './people/person-list/person-list.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';
import { PersonListItemComponent } from './people/person-list/person-list-item/person-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    OverviewComponent,
    ApartmentsComponent,
    BuildingComponent,
    SuppliersComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
