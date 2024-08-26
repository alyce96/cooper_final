import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensusListComponent } from './components/census-list/census-list.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'census-list' },
  { path: 'census-list', component: CensusListComponent },
  { path: 'add-entry', component: AddEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }