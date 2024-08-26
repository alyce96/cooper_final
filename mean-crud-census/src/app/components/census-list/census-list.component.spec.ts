import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensuslistComponent } from './census-list.component';

describe('CensuslistComponent', () => {
  let component: CensusListComponent;
  let fixture: ComponentFixture<CensuslistComponentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CensusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
