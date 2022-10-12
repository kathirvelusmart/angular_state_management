import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserState, UserStateModel } from './state/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'state-app';
  userdetails: any = []
  @Select(UserState) user$: Observable<UserStateModel>
  constructor() {
    this.user$.subscribe(userdetails => {
      this.userdetails = userdetails.users
    })
    console.log(this.userdetails)
  }

}
