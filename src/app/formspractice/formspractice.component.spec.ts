import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspracticeComponent } from './formspractice.component';

describe('FormspracticeComponent', () => {
  let component: FormspracticeComponent;
  let fixture: ComponentFixture<FormspracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormspracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormspracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
