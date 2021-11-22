import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFacultadComponent } from './listado-facultad.component';

describe('ListadoFacultadComponent', () => {
  let component: ListadoFacultadComponent;
  let fixture: ComponentFixture<ListadoFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
