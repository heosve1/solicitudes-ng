import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionLlamadaComponent } from './creacion-llamada.component';

describe('CreacionLlamadaComponent', () => {
  let component: CreacionLlamadaComponent;
  let fixture: ComponentFixture<CreacionLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
