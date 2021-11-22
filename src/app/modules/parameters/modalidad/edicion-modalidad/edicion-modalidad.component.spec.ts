import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionModalidadComponent } from './edicion-modalidad.component';

describe('EdicionModalidadComponent', () => {
  let component: EdicionModalidadComponent;
  let fixture: ComponentFixture<EdicionModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
