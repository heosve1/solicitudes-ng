import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAreainvestigacionComponent } from './listado-areainvestigacion.component';

describe('ListadoAreainvestigacionComponent', () => {
  let component: ListadoAreainvestigacionComponent;
  let fixture: ComponentFixture<ListadoAreainvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAreainvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAreainvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
