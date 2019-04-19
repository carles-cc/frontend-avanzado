import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/services/profile.service';
import {SigninService} from '../../shared/services/signin.service';
import {Store} from '@ngrx/store';
import {UserState} from '../../shared/states/user/user.state';
import {GetUser} from '../../shared/states/user/actions/user.actions';
import {errorLogin, logged, loading} from '../../shared/states/user/selectors/user.selectors';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorLogin$ = false;
  loading$ = false;

  constructor(
    private signinService: SigninService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<UserState>
  ) {
    // @ts-ignore
    this.errorLogin$ = this.store.select(errorLogin);
    // @ts-ignore
    this.loading$ = this.store.select(loading);
    // @ts-ignore
    this.store.select(logged)
      .subscribe(next => next && this.router.navigate(['admin/dashboard']));
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.store.dispatch(new GetUser({ ...this.loginForm.value }));
  }
}
