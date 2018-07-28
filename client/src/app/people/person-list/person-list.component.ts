import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  filteredPersons: Person[];
  persons: Person[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPersons = this.listFilter ? this.performFilter(this.listFilter) : this.persons;
  }

  performFilter(filterByCriteria: string): Person[] {
    filterByCriteria = filterByCriteria.toLocaleLowerCase();

    return this.persons.filter(
      (p: Person) =>
      p.firstName.toLocaleLowerCase().indexOf(filterByCriteria) !== -1 ||
      p.lastName.toLocaleLowerCase().indexOf(filterByCriteria) !== -1 ||
      p.email.toLocaleLowerCase().indexOf(filterByCriteria) !== -1);
  }

  constructor() {
   }

  ngOnInit() {

    // Load Data Here
    this.persons = this.initializePersonList();
    this.filteredPersons = this.persons;
  }

  initializePersonList(): Person[] {

    const johnConnor = new Person();
    johnConnor.firstName = 'John';
    johnConnor.lastName = 'Connor';
    johnConnor.email = 'johnconnor@terminator.tv';
    johnConnor.phone = '+1 856 3654 4856';
    johnConnor.profileUrl = '.\\assets\\man-1.jpg';

    const sarahConnor = new Person();
    sarahConnor.firstName = 'Sarah';
    sarahConnor.lastName = 'Connor';
    sarahConnor.email = 'sarahconnor@terminator.tv';
    sarahConnor.phone = '+1 856 3455 0098';
    sarahConnor.profileUrl = '.\\assets\\girl-1.jpg';

    const stevenBrown = new Person();
    stevenBrown.firstName = 'Steven';
    stevenBrown.lastName = 'Brown';
    stevenBrown.email = 's.brownie@gmail.com';
    stevenBrown.phone = '+1 845 5895 0325';
    stevenBrown.profileUrl = '.\\assets\\man-2.jpg';

    const patriciaBrown = new Person();
    patriciaBrown.firstName = 'Patricia';
    patriciaBrown.lastName = 'Brown';
    patriciaBrown.email = 'patbrown63@outlook.com';
    patriciaBrown.phone = '+1 845 5846 2647';
    patriciaBrown.profileUrl = '.\\assets\\girl-2.jpg';

    const emilyBrown = new Person();
    emilyBrown.firstName = 'Emily';
    emilyBrown.lastName = 'Brown';
    emilyBrown.email = 'emily89@gmail.com';
    emilyBrown.phone = '+1 845 4795 4447';
    emilyBrown.profileUrl = '.\\assets\\girl-3.jpg';

    const andrewBrown = new Person();
    andrewBrown.firstName = 'Andrew';
    andrewBrown.lastName = 'Brown';
    andrewBrown.email = 'andy81@gmail.com';
    andrewBrown.phone = '+1 589 5585 4467';
    andrewBrown.profileUrl = '.\\assets\\man-3.jpg';

    const jamesFerguson = new Person();
    jamesFerguson.firstName = 'James';
    jamesFerguson.lastName = 'Ferguson';
    jamesFerguson.email = 'james.ferguson@united.uk';
    jamesFerguson.phone = '+28 9 5896 4789';
    jamesFerguson.profileUrl = '.\\assets\\man-4.jpg';

    return [ johnConnor , sarahConnor, stevenBrown, patriciaBrown, emilyBrown, andrewBrown, jamesFerguson];
  }
}
