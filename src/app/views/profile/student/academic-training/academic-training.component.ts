import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/user';
import {ProfileService} from '../../../../shared/services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile-student-academic-training',
  templateUrl: './academic-training.component.html',
  styleUrls: ['./academic-training.component.scss']
})
export class AcademicTrainingComponent implements OnInit {
  user: User;

  constructor(
      private profileService: ProfileService,
      private router: Router,
      private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.profileService.loadProfile()
        .subscribe(user => {
          this.user = user;
          console.log(this.user);
        });
  }

  editStudy() {
      // TODO
  }

  removeStudy() {
    // TODO
  }

  addStudy() {
    this.router.navigate([{ outlets: { study: ['study'] } }])
      .then(_ => {
      });
  }
}
