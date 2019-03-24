import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../shared/services/profile.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-profile-student-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  user: User;

  constructor(
      private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.profileService.loadProfile()
        .subscribe(user => {
          this.user = user;
          // console.log(this.user);
        });
  }

}
