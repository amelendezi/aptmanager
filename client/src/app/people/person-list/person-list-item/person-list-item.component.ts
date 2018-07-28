import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-person-list-item',
  templateUrl: './person-list-item.component.html',
  styleUrls: ['./person-list-item.component.css']
})
export class PersonListItemComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() profilePictureUrl: string;

  constructor() { }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }
}
