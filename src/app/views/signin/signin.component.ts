import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  private loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(
      private usersService: UsersService,
      private router: Router,
      private route: ActivatedRoute,
      private titleService: Title
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(data =>
      this.titleService.setTitle(data.title)
    );
    // this.getUsers();
  }

  onSubmit() {
    this.router.navigate(['/admin/dashboard']);
  }

  forgotPassword(event) {
    event.preventDefault();
    this.router.navigate(['/forgot-password']);
  }

  getUsers() {
    this.usersService.getUsers()
        .subscribe(users => console.log(users));
  }

}
