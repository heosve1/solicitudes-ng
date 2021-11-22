import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionFacultadComponent } from './edicion-facultad.component';

describe('EdicionFacultadComponent', () => {
  let component: EdicionFacultadComponent;
  let fixture: ComponentFixture<EdicionFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
