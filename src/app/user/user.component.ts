import { Component } from "@angular/core";


@Component ( {
  selector:'app-user',
  templateUrl:'./user.component.html',
  styles:[ `
  .online {
    color: white;
    

  }  
  `]
})
export class UserComponent{
  userId = 10;
  userStatus = 'online' ;

  constructor () {
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getUserStatus(){
    return this.userStatus;
  }  

  getColor() {
    return this.userStatus === 'online' ? 'green' : 'red';
  }
}


// pass meta data to the decorator 
// tells what to do with the class
// data is passed as js obj