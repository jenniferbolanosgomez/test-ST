import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAnimalComponent } from './add-edit-animal.component';

describe('AddEditAnimalComponent', () => {
  let component: AddEditAnimalComponent;
  let fixture: ComponentFixture<AddEditAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
