import { CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe, KeyValuePipe, TitleCasePipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  name = 'Aira Rosal';
  price = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  a: number = 0.259;
  b: number = 1.3495;
  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([
    [2, 'foo'],
    [1, 'bar'],
  ]);
  movie = "Insidious";
}
