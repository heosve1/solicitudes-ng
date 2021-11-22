import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionComiteComponent } from './creacion-comite.component';

describe('CreacionComiteComponent', () => {
  let component: CreacionComiteComponent;
  let fixture: ComponentFixture<CreacionComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
