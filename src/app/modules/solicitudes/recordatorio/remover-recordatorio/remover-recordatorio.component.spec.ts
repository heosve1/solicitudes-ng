import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverRecordatorioComponent } from './remover-recordatorio.component';

describe('RemoverRecordatorioComponent', () => {
  let component: RemoverRecordatorioComponent;
  let fixture: ComponentFixture<RemoverRecordatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverRecordatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
