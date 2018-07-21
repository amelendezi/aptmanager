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
    console.log('Loading styles for main menu');
    return this.menuItemStyle;
  }

  toggleOption(option: string): void {
    console.log('The option is: ' + option);
  }
}
