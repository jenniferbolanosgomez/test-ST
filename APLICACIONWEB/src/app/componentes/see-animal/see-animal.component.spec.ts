import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAnimalComponent } from './see-animal.component';

describe('SeeAnimalComponent', () => {
  let component: SeeAnimalComponent;
  let fixture: ComponentFixture<SeeAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
