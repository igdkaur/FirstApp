import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
  import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    BlueComponent,
    RedComponent        //comp registered
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //lists all the components that should be know to angualr when analysing index.html file
})
export class AppModule { }


// app starts -> main.ts ->bootstrap ang app -> pass module as arg -> app-root selector