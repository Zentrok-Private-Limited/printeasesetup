import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epson } from './epson';

describe('Epson', () => {
  let component: Epson;
  let fixture: ComponentFixture<Epson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Epson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Epson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
