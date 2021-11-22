import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoJuradoComponent } from './listado-jurado.component';

describe('ListadoJuradoComponent', () => {
  let component: ListadoJuradoComponent;
  let fixture: ComponentFixture<ListadoJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
