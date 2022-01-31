import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarExecSpaceComponent } from './sidebar-exec-space.component';

describe('SidebarExecSpaceComponent', () => {
  let component: SidebarExecSpaceComponent;
  let fixture: ComponentFixture<SidebarExecSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarExecSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarExecSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
