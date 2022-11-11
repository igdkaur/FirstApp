// app component is referenced to start the angualr app

import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //handles app-root in index.html
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3{
    color: blue;
  }
  `]
})
export class AppComponent {
 
}


// style URLs is an array because we could reference multiple external style sheets here.
// could add pointers to other style sheets.

// can also set up another property,styles.
// takes an array of strings, define the style in this string.
// use backticks again to be able to write a multi-line expression here.