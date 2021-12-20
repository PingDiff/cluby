import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheClubComponent } from './recherche-club.component';

describe('RechercheClubComponent', () => {
  let component: RechercheClubComponent;
  let fixture: ComponentFixture<RechercheClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
