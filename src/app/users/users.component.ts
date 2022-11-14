import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-users]', //attribute
  selector: '.app-users', //class
   templateUrl: './users.component.html',
  // template: '<app-user></app-user> ',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  allowNewUser = false;
  userCreationStatus = 'No user was created';
  userName = 'gdk';

  constructor() { 
    setTimeout(() => { 
      this.allowNewUser =true;
    },2000)
  }

  ngOnInit(): void {
  }

  onUserCreation() {
    this.userCreationStatus = 'User was created';
  }

  onUpdateUser(event:Event) {
    // this.userName = event.target.value;  //target is of type input element, so add type explicitly
    this.userName = (<HTMLInputElement>event.target).value;
  }
}


// in template url we point to a html file - external template file
// we can change template url to template - inline template
// One of the two has to be present either a link to external template or just template to define it in this file. But each component needs to have a template. This is the one property you have to have at all times.
// q6 change the way we set up template - url to inline 
//q6 - defining the html code in same file 
//  want to write multi-line strings here
//  you add more HTML code to it can switch from a normal string with single quotation marks to using back ticks
// use JavaScript template expressions to be able to write model line strings in between there.