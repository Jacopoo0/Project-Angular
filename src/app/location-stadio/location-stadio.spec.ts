import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStadio } from './location-stadio';

describe('LocationStadio', () => {
  let component: LocationStadio;
  let fixture: ComponentFixture<LocationStadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationStadio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationStadio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
