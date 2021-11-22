import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverVinculacionComponent } from './remover-vinculacion.component';

describe('RemoverVinculacionComponent', () => {
  let component: RemoverVinculacionComponent;
  let fixture: ComponentFixture<RemoverVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
