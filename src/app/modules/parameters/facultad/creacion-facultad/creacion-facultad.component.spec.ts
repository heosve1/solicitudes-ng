import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionFacultadComponent } from './creacion-facultad.component';

describe('CreacionFacultadComponent', () => {
  let component: CreacionFacultadComponent;
  let fixture: ComponentFixture<CreacionFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
