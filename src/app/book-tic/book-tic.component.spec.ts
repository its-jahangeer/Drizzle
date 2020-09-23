import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicComponent } from './book-tic.component';

describe('BookTicComponent', () => {
  let component: BookTicComponent;
  let fixture: ComponentFixture<BookTicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
