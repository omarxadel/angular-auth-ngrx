import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LogInComponent implements OnInit {
  user: User = new User();

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    console.log(this.user);
  }
}
