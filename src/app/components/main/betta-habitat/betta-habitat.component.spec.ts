import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettaHabitatComponent } from './betta-habitat.component';

describe('BettaHabitatComponent', () => {
  let component: BettaHabitatComponent;
  let fixture: ComponentFixture<BettaHabitatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettaHabitatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettaHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
