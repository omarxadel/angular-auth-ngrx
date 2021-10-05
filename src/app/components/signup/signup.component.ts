import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignUpComponent implements OnInit {
  user: User = new User();

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    console.log(this.user);
  }
}
