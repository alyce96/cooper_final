import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-census',
  standalone: true, 
  templateUrl: './add-census.component.html',
  styleUrls: ['./add-census.component.css'],
  imports: [ReactiveFormsModule, FormsModule]
})
export class AddCensusComponent implements OnInit {
  CensusForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
) {
    this.censusForm = this.formBuilder.group({
      Year of the Census: [''],
      Census Taker Name: [''],
      Number of People in Household: [''],
      Household State: [''],
      Household City: [''],
    
    })
  }
ngOnInit(): void { }
onSubmit(): any {
  this.crudService.AddEntry(this.censusForm.value)
    .subscribe({
      error: (err) => console.log(err)
    })
    this.ngZone.run(() => this.router.navigateByUrl('/census-list'));
  }
}