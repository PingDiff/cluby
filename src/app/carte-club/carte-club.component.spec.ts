import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteClubComponent } from './carte-club.component';

describe('CarteClubComponent', () => {
  let component: CarteClubComponent;
  let fixture: ComponentFixture<CarteClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
