import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProponenteComponent } from './listado-proponente.component';

describe('ListadoProponenteComponent', () => {
  let component: ListadoProponenteComponent;
  let fixture: ComponentFixture<ListadoProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
