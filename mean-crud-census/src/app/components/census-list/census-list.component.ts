import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class CensusListComponent implements OnInit {

  Entry:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetEntries().subscribe(res => {
      console.log(res)
      this.Entries =res;
    });    
  }
}
