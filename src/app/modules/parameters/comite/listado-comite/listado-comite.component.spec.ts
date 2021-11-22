import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComiteComponent } from './listado-comite.component';

describe('ListadoComiteComponent', () => {
  let component: ListadoComiteComponent;
  let fixture: ComponentFixture<ListadoComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
