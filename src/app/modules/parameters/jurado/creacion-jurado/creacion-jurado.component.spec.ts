import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionJuradoComponent } from './creacion-jurado.component';

describe('CreacionJuradoComponent', () => {
  let component: CreacionJuradoComponent;
  let fixture: ComponentFixture<CreacionJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
