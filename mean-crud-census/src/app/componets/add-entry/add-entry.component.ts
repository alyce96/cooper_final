import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  CensusForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
) {
    this.CensusFormForm = this.formBuilder.group({
      Year_of_the_Census: [''],
      Census_Taker_Name: [''],
      Number_of_People_in_the_Household: [''],
      Household_State: [''],
      Household_City: [''],
    })
  }
ngOnInit(): void { }
onSubmit(): any {
  this.crudService.AddEntry(this.CensusForm.value)
    .subscribe({
      error: (err) => console.log(err)
    })
    this.ngZone.run(() => this.router.navigateByUrl('/census-list'));
  }
}