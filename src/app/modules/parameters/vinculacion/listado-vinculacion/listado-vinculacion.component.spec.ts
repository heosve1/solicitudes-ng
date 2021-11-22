import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVinculacionComponent } from './listado-vinculacion.component';

describe('ListadoVinculacionComponent', () => {
  let component: ListadoVinculacionComponent;
  let fixture: ComponentFixture<ListadoVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
