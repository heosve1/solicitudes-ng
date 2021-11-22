import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionJuradoComponent } from './edicion-jurado.component';

describe('EdicionJuradoComponent', () => {
  let component: EdicionJuradoComponent;
  let fixture: ComponentFixture<EdicionJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
