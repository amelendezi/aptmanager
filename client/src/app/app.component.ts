import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  overviewCode = 'overview';
  overviewOption = false;

  apartmentsCode = 'apartments';
  apartmentsOption = false;

  buildingCode = 'building';
  buildingOption = false;

  suppliersCode = 'suppliers';
  suppliersOption = false;

  peopleCode = 'people';
  peopleOption = true;

  menuItemStyle = 'main-menu-item';
  menuItemSelectedStyle = 'main-menu-item-selected';

  /**
   * Sets the CSS style to a given main menu item depending on if it
   * is selected or not.
   */
  getMenuItemStyle(option: string): string {
    switch (option) {
      case this.overviewCode:
        return this.overviewOption ? this.menuItemSelectedStyle : this.menuItemStyle;
      case this.apartmentsCode:
        return this.apartmentsOption ? this.menuItemSelectedStyle : this.menuItemStyle;
      case this.buildingCode:
        return this.buildingOption ? this.menuItemSelectedStyle : this.menuItemStyle;
      case this.suppliersCode:
        return this.suppliersOption ? this.menuItemSelectedStyle : this.menuItemStyle;
      case this.peopleCode:
        return this.peopleOption ? this.menuItemSelectedStyle : this.menuItemStyle;
    }
    return this.menuItemStyle;
  }

  toggleOption(option: string): void {
    switch(option) {
      case this.overviewCode:
        this.overviewOption = true;
        this.apartmentsOption = false;
        this.buildingOption = false;
        this.suppliersOption = false;
        this.peopleOption = false;
        break;
      case this.apartmentsCode:
        this.overviewOption = false;
        this.apartmentsOption = true;
        this.buildingOption = false;
        this.suppliersOption = false;
        this.peopleOption = false;
        break;
      case this.buildingCode:
        this.overviewOption = false;
        this.apartmentsOption = false;
        this.buildingOption = true;
        this.suppliersOption = false;
        this.peopleOption = false;
        break;
      case this.suppliersCode:
        this.overviewOption = false;
        this.apartmentsOption = false;
        this.buildingOption = false;
        this.suppliersOption = true;
        this.peopleOption = false;
        break;
      case this.peopleCode:
        this.overviewOption = false;
        this.apartmentsOption = false;
        this.buildingOption = false;
        this.suppliersOption = false;
        this.peopleOption = true;
        break;
    }
  }
}
