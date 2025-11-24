import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  //text interpolation
  message = "Data Binding Demo";
  title = "My First App";
  description:string = "This is my new Angular Application!";

  //Property Binding
  imageUrl = "https://d2zp5xs5cp8zlg.cloudfront.net/image-68121-800.jpg";
  w = 800;
  h = 534;
  altText = "Angular Logo";
  textColor = 'purple';

  isHighlighted = true;
  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}


