import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent implements OnInit {
  hideParagraph = true;
  counter = 0;
  clicks = [];
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick (){
    this.counter = this.counter + 1;
    this.clicks.push(this.counter);
    this.hideParagraph = !this.hideParagraph;

  }

}
