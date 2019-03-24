import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../shared/services/company.service';
import { Company } from '../../../shared/models/company';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.scss']
})
export class ProfileCompanyComponent implements OnInit {
  company: Company;

  companyForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    businessName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    cif: ['', [Validators.required, Validators.pattern('^(\\d{8}[A-Z]{1})$')]],
    address: ['', Validators.required],
    province: ['', Validators.required],
    city: ['', Validators.required],
    url: [''],
    contact: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
      phone: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  });

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.companyService.loadProfile()
      .subscribe(company => {
        this.company = company;
        console.log(this.company);
      });
  }


}
