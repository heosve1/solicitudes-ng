import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverJuradoComponent } from './remover-jurado.component';

describe('RemoverJuradoComponent', () => {
  let component: RemoverJuradoComponent;
  let fixture: ComponentFixture<RemoverJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
