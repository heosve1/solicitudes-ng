import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverAreainvestigacionComponent } from './remover-areainvestigacion.component';

describe('RemoverAreainvestigacionComponent', () => {
  let component: RemoverAreainvestigacionComponent;
  let fixture: ComponentFixture<RemoverAreainvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverAreainvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverAreainvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
