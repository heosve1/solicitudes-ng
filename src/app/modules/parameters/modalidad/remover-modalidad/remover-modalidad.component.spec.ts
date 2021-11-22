import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverModalidadComponent } from './remover-modalidad.component';

describe('RemoverModalidadComponent', () => {
  let component: RemoverModalidadComponent;
  let fixture: ComponentFixture<RemoverModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
