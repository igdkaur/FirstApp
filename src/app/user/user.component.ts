import { Component } from "@angular/core";


@Component ( {
  selector:'app-user',
  templateUrl:'./user.component.html'
})
export class UserComponent{
  userId = 10;
  userStatus = 'online' ;

  getUserStatus(){
    return this.userStatus;
}  
}


// pass meta data to the decorator 
// tells what to do with the class
// data is passed as js obj