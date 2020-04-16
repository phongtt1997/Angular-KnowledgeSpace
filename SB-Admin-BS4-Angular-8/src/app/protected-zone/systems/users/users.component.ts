import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { UserService } from '@app/shared/services/users.services';
//import { User } from '@app/shared/models';
import { UserService } from '../../../shared/services/users.services';
import { User } from '../../../shared/models';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getAll();
  }

}
