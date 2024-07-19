import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaytwoComponent } from './laytwo.component';

describe('LaytwoComponent', () => {
  let component: LaytwoComponent;
  let fixture: ComponentFixture<LaytwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaytwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
