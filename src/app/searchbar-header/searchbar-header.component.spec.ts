import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarHeaderComponent } from './searchbar-header.component';

describe('SearchbarHeaderComponent', () => {
  let component: SearchbarHeaderComponent;
  let fixture: ComponentFixture<SearchbarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
