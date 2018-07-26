import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: any[] = [
    {
      fullName: 'John Connor',
      email: 'j.connor@terminator.com',
      phone: '+57 300 2184225',
      profileUrl: 'sample.jpg',
    },
    {
      fullName: 'Rocky Balboa',
      email: 'r.balboa@rocky.com',
      phone: '+57 301 2564879',
      profileUrl: 'sample.jpg',
    },
    {
      fullName: 'Jason Clarke',
      email: 'j.clarke@holis.com',
      phone: '+52 06 25586978',
      profileUrl: 'sample.jpg',
    },
    {
      fullName: 'Andrea Negro',
      email: 'anegro@nnt.er',
      phone: '+37 305 2589878',
      profileUrl: 'sample.jpg',
    },
    {
      fullName: 'Silvia Furlong',
      email: 'silvia@urton.com',
      phone: '+37 521 2564879',
      profileUrl: 'sample.jpg',
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}
