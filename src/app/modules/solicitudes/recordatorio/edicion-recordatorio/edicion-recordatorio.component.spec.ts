import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionRecordatorioComponent } from './edicion-recordatorio.component';

describe('EdicionRecordatorioComponent', () => {
  let component: EdicionRecordatorioComponent;
  let fixture: ComponentFixture<EdicionRecordatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionRecordatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
