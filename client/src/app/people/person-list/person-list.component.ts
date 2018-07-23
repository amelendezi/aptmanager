import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: any[] = [
    {
      fullName: 'John Conor',
      email: 'j.conor@terminator.com',
      profileUrl: 'sample.jpg',
    },
    {
      fullName: 'Rocky Balboa',
      email: 'r.balboa@rocky.com',
      profileUrl: 'sample.jpg',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
