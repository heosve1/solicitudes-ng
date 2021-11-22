import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRecordatorioComponent } from './listado-recordatorio.component';

describe('ListadoRecordatorioComponent', () => {
  let component: ListadoRecordatorioComponent;
  let fixture: ComponentFixture<ListadoRecordatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRecordatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
