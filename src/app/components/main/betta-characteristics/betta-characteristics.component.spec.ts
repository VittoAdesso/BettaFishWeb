import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettaCharacteristicsComponent } from './betta-characteristics.component';

describe('BettaCharacteristicsComponent', () => {
  let component: BettaCharacteristicsComponent;
  let fixture: ComponentFixture<BettaCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettaCharacteristicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettaCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
