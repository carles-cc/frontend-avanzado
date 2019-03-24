import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  private forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data =>
      this.titleService.setTitle(data.title)
    );
  }

  onSubmit() {
    this.router.navigate(['/signin']);
  }
}
