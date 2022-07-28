import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ToDo';

  allItems = [
    { description: ''}
  ];

  get items() {
      return this.allItems;
    }

  addItem(description: string) {
    this.allItems.unshift({
      description
    });
  }
}
