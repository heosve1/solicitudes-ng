import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionAreainvestigacionComponent } from './edicion-areainvestigacion.component';

describe('EdicionAreainvestigacionComponent', () => {
  let component: EdicionAreainvestigacionComponent;
  let fixture: ComponentFixture<EdicionAreainvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionAreainvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionAreainvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
