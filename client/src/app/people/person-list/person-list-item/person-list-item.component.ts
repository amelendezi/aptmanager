import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-person-list-item',
  templateUrl: './person-list-item.component.html',
  styleUrls: ['./person-list-item.component.css']
})
export class PersonListItemComponent implements OnInit, OnChanges {

  title: string;
  subTitle: string;
  profilePictureUrl: string;
  @Input() person: Person;

  constructor() { }

  ngOnChanges(): void {
    this.profilePictureUrl = this.person.profileUrl;
    this.title = this.person.getFullName();
    this.subTitle = this.person.email + ' | ' + this.person.phone;
  }

  ngOnInit(): void {
  }
}
