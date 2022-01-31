import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecSpaceComponent } from './exec-space.component';

describe('ExecSpaceComponent', () => {
  let component: ExecSpaceComponent;
  let fixture: ComponentFixture<ExecSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
