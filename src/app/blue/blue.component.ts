import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue',
  //templateUrl: './blue.component.html',
  template: `
  <p> blue component </p>
  `,
  //styleUrls: ['./blue.component.css']
  styles: [
    `
    p {
      padding: 10px;
      border : 2px solid blue;
    }
    `
  ]
})
export class BlueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// add inline template and styles