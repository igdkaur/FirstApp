import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent implements OnInit {
  hideParagraph = true;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick (){
    this.hideParagraph = !this.hideParagraph;

  }

}
