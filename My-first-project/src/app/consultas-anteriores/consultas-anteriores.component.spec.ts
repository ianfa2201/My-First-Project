import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasAnterioresComponent } from './consultas-anteriores.component';

describe('ConsultasAnterioresComponent', () => {
  let component: ConsultasAnterioresComponent;
  let fixture: ComponentFixture<ConsultasAnterioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultasAnterioresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
