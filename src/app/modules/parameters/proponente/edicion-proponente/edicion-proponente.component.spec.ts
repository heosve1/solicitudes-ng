import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionProponenteComponent } from './edicion-proponente.component';

describe('EdicionProponenteComponent', () => {
  let component: EdicionProponenteComponent;
  let fixture: ComponentFixture<EdicionProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
