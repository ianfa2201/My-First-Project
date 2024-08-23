import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSeenComponent } from './courses-seen.component';

describe('CoursesSeenComponent', () => {
  let component: CoursesSeenComponent;
  let fixture: ComponentFixture<CoursesSeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesSeenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesSeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
