import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/user';
import {ProfileService} from '../../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-student-current-languages',
  templateUrl: './current-languages.component.html',
  styleUrls: ['./current-languages.component.scss']
})
export class CurrentLanguagesComponent implements OnInit {
  user: User;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.loadProfile()
      .subscribe(user => {
        this.user = user;
        console.log(this.user);
      });
  }

  editLanguage() {
    // TODO
  }

  removeLanguage() {
    // TODO
  }

  addLanguage() {
    // TODO
  }
}
