import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionProponenteComponent } from './creacion-proponente.component';

describe('CreacionProponenteComponent', () => {
  let component: CreacionProponenteComponent;
  let fixture: ComponentFixture<CreacionProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
