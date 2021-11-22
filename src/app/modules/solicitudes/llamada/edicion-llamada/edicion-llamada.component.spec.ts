import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionLlamadaComponent } from './edicion-llamada.component';

describe('EdicionLlamadaComponent', () => {
  let component: EdicionLlamadaComponent;
  let fixture: ComponentFixture<EdicionLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
