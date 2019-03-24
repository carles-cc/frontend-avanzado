import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../../../shared/services/profile.service';
import { Utils } from '../../../../shared/utils';

@Component({
  selector: 'app-profile-student-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  user: User;

  studentPersonalDataForm = this.fb.group({
    personalData: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
      // avatar_hash: ['http://www.hawkgirl.net/images/140X140.gif'],
      avatar_hash: [''],
      birthDate: ['', Validators.required],
      phone: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      otherPhone: [''],
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.pattern('^(([X-Z]{1}\\d{7}[A-Z]{1})|(\\d{8}[A-Z]{1})|([A-Z]{2}\\d{6}))$')]],
    }),
    address: this.fb.group({
      address: ['', Validators.required],
      province: ['', Validators.required],
      city: ['', Validators.required],
    }),
    other: this.fb.group({
      about: [''],
      competences: [''],
      driverLicenses: [''],
    })
  });

  constructor(
      private fb: FormBuilder,
      private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.profileService.loadProfile()
        .subscribe(user => {
          this.user = user;
          // console.log(this.user);
          this.updateForm(user);
        });
  }

  updateForm(user: User) {
    this.studentPersonalDataForm.patchValue({
      personalData: {
        name: user.name,
        surname: user.surname,
        avatar_hash: user.avatar_hash,
        birthDate: Utils.prototype.millisToDateInput(user.birthDate),
        phone: user.phone,
        otherPhone: user.otherPhone,
        documentType: user.documentType,
        documentNumber: user.documentNumber,
      },
      address: {
        address: user.address,
        city: user.city,
        province: user.province,
      },
      other: {
        about: user.other.about,
        competences: user.other.competences,
        driverLicenses: user.other.driverLicenses
      }
    });
  }

}
