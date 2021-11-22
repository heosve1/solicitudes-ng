import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoModalidadComponent } from './listado-modalidad.component';

describe('ListadoModalidadComponent', () => {
  let component: ListadoModalidadComponent;
  let fixture: ComponentFixture<ListadoModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
