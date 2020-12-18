import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedbudgetComponent } from './allocatedbudget.component';

describe('AllocatedbudgetComponent', () => {
  let component: AllocatedbudgetComponent;
  let fixture: ComponentFixture<AllocatedbudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocatedbudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatedbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
