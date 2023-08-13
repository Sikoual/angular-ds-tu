import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ds-tu';

  public addTwoNumbers(one: number, two: number){
    return one + two;
  }
}
