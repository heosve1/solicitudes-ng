import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverLlamadaComponent } from './remover-llamada.component';

describe('RemoverLlamadaComponent', () => {
  let component: RemoverLlamadaComponent;
  let fixture: ComponentFixture<RemoverLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
