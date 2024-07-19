import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyoneComponent } from './lazyone.component';

describe('LazyoneComponent', () => {
  let component: LazyoneComponent;
  let fixture: ComponentFixture<LazyoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
