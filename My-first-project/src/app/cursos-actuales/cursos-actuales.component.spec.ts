import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosActualesComponent } from './cursos-actuales.component';

describe('CursosActualesComponent', () => {
  let component: CursosActualesComponent;
  let fixture: ComponentFixture<CursosActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosActualesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
