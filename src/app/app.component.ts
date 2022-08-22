import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'parent-demo';
  toggleValue: boolean = true;

  toggle(value: object) {
    // console.log('value', value);
    this.toggleValue = !this.toggleValue;
  }

  // show(value: boolean) {
  //   console.log('value', value);
  // }

  greet(name: string) {
    alert('Hello ' + name);
  }
}
