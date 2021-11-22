import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionAreainvestigacionComponent } from './creacion-areainvestigacion.component';

describe('CreacionAreainvestigacionComponent', () => {
  let component: CreacionAreainvestigacionComponent;
  let fixture: ComponentFixture<CreacionAreainvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionAreainvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionAreainvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
