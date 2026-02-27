import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canon } from './canon';

describe('Canon', () => {
  let component: Canon;
  let fixture: ComponentFixture<Canon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Canon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Canon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
