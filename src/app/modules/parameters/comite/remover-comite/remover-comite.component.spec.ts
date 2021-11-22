import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverComiteComponent } from './remover-comite.component';

describe('RemoverComiteComponent', () => {
  let component: RemoverComiteComponent;
  let fixture: ComponentFixture<RemoverComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
