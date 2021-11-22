import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionModalidadComponent } from './creacion-modalidad.component';

describe('CreacionModalidadComponent', () => {
  let component: CreacionModalidadComponent;
  let fixture: ComponentFixture<CreacionModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
