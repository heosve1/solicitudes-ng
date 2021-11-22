import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionComiteComponent } from './edicion-comite.component';

describe('EdicionComiteComponent', () => {
  let component: EdicionComiteComponent;
  let fixture: ComponentFixture<EdicionComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
