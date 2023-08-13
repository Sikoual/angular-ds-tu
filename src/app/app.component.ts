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

  public add(numbers: number[]): number {
    let sum = 0

    for(const number of numbers){
      sum += number;
    }

    return sum;
  }

  public addMaxFiveNumber(numbers: number[]): number {
    if(numbers.length > 5){
      throw new Error('maximum limit number is passed');
    }
    let sum = 0

    for(const number of numbers){
      sum += number;
    }

    return sum;
  }

  public transformToNumber(value: string){
    return +value
  }
}
