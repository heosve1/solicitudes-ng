import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverProponenteComponent } from './remover-proponente.component';

describe('RemoverProponenteComponent', () => {
  let component: RemoverProponenteComponent;
  let fixture: ComponentFixture<RemoverProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
