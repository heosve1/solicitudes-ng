import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionVinculacionComponent } from './creacion-vinculacion.component';

describe('CreacionVinculacionComponent', () => {
  let component: CreacionVinculacionComponent;
  let fixture: ComponentFixture<CreacionVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
