import { Component } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';
import {Store} from '@ngrx/store';
import {UserState} from '../../../shared/states/user/user.state';
import {selectedUser, studiesSelector} from '../../../shared/states/user/selectors/user.selectors';
import {tap} from 'rxjs/operators';
import {DeleteStudy, SaveUser} from "../../../shared/states/user/actions/user.actions";

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent {
  user: User;
  constructor(
    private profileService: ProfileService,
    private store: Store<UserState>
  ) {
    // @ts-ignore
    this.store.select(selectedUser)
      .subscribe(result => this.user = result);
  }

  deleteStudy(studyID: number) {
    this.user.studies = this.user.studies.filter(study => study.uid !== studyID);
    this.store.dispatch(new SaveUser(this.user));
  }

  deleteLanguage(languageID: any) {
    this.user.languages = this.user.languages.filter(language => language.uid !== languageID);
    this.store.dispatch(new SaveUser(this.user));
  }
}
