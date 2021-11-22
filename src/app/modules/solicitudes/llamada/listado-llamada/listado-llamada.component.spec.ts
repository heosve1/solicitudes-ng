import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLlamadaComponent } from './listado-llamada.component';

describe('ListadoLlamadaComponent', () => {
  let component: ListadoLlamadaComponent;
  let fixture: ComponentFixture<ListadoLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
