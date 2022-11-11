import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue',
  //templateUrl: './blue.component.html',
  template: `
  <p> blue component </p>
  `,
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
