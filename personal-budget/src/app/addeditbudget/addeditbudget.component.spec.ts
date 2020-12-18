import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditbudgetComponent } from './addeditbudget.component';

describe('AddeditbudgetComponent', () => {
  let component: AddeditbudgetComponent;
  let fixture: ComponentFixture<AddeditbudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditbudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
