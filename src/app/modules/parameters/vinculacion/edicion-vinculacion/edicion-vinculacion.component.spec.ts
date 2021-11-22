import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionVinculacionComponent } from './edicion-vinculacion.component';

describe('EdicionVinculacionComponent', () => {
  let component: EdicionVinculacionComponent;
  let fixture: ComponentFixture<EdicionVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
