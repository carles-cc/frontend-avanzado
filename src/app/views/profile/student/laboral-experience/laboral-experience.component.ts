import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/user';
import {ProfileService} from '../../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-student-laboral-experience',
  templateUrl: './laboral-experience.component.html',
  styleUrls: ['./laboral-experience.component.scss']
})
export class LaboralExperienceComponent implements OnInit {
  user: User;

  constructor(
    private profileService: ProfileService
  ) {
  }

  ngOnInit() {
    this.profileService.loadProfile()
      .subscribe(user => {
        this.user = user;
        console.log(this.user);
      });
  }

  editExperience() {
    // TODO
  }

  removeExperience() {
    // TODO
  }

  addExperience() {
    // TODO
  }
}
