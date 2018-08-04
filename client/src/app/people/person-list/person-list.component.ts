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

    const jeffBrown = new Person();
    jeffBrown.firstName = 'Jeff';
    jeffBrown.lastName = 'Brown';
    jeffBrown.email = 'jbrown@ggarm.tv';
    jeffBrown.phone = '+1 856 3654 4856';
    jeffBrown.profileUrl = '.\\assets\\man-1.jpg';

    const maryBrown = new Person();
    maryBrown.firstName = 'Mary';
    maryBrown.lastName = 'Brown';
    maryBrown.email = 'mbrown@gmail.com';
    maryBrown.phone = '+1 856 3455 0098';
    maryBrown.profileUrl = '.\\assets\\girl-1.jpg';

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

    const amiraJohnson = new Person();
    amiraJohnson.firstName = 'Amira';
    amiraJohnson.lastName = 'Johnson';
    amiraJohnson.email = 'amira@united.uk';
    amiraJohnson.phone = '+28 9 5845 4458';
    amiraJohnson.profileUrl = '.\\assets\\girl-4.jpg';

    const aliciaRonis = new Person();
    aliciaRonis.firstName = 'Alicia';
    aliciaRonis.lastName = 'Ronis';
    aliciaRonis.email = 'alis@united.uk';
    aliciaRonis.phone = '+28 9 5652 5288';
    aliciaRonis.profileUrl = '.\\assets\\girl-5.jpg';

    const erickHenderson = new Person();
    erickHenderson.firstName = 'Erick';
    erickHenderson.lastName = 'Henderson';
    erickHenderson.email = 'e.henderson@dhl.com';
    erickHenderson.phone = '+45 8 5258 5547';
    erickHenderson.profileUrl = '.\\assets\\man-5.jpg';

    const andreaHenderson = new Person();
    andreaHenderson.firstName = 'Andrea';
    andreaHenderson.lastName = 'Henderson';
    andreaHenderson.email = 'andreahenderson485@gmail.com';
    andreaHenderson.phone = '+45 8 5255 8947';
    andreaHenderson.profileUrl = '.\\assets\\girl-6.jpg';

    const melindaGarrison = new Person();
    melindaGarrison.firstName = 'Melinda';
    melindaGarrison.lastName = 'Garrison';
    melindaGarrison.email = 'mgarris@gmail.com';
    melindaGarrison.phone = '+45 8 7589 6398';
    melindaGarrison.profileUrl = '.\\assets\\girl-7.jpg';

    const jamesOris = new Person();
    jamesOris.firstName = 'James';
    jamesOris.lastName = 'Oris';
    jamesOris.email = 'joris@hotmail.com';
    jamesOris.phone = '+45 8 5588 0098';
    jamesOris.profileUrl = '.\\assets\\man-6.jpg';

    const michealOris = new Person();
    michealOris.firstName = 'Micheal';
    michealOris.lastName = 'Oris';
    michealOris.email = 'mo67585@outlook.com';
    michealOris.phone = '+45 8 3454 1024';
    michealOris.profileUrl = '.\\assets\\man-7.jpg';

    const christianSlater = new Person();
    christianSlater.firstName = 'Christian';
    christianSlater.lastName = 'Slater';
    christianSlater.email = 'slaterchris@hotmail.com';
    christianSlater.phone = '+45 8 5588 2020';
    christianSlater.profileUrl = '.\\assets\\man-8.jpg';

    return [ jeffBrown , maryBrown, stevenBrown, patriciaBrown, emilyBrown, andrewBrown,
       jamesFerguson, amiraJohnson, aliciaRonis, erickHenderson, andreaHenderson, melindaGarrison,
       jamesOris, michealOris, christianSlater];
  }
}
